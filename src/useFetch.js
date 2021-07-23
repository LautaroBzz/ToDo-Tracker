
// Custom Hook >>> Fetching Data
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // stops the fetch in case it is not longer needed to finish.
    const abortControl = new AbortController();

    // asociation to later apply on the cleanup function
    fetch(url, { signal: abortControl.signal })
      .then(response => {
        if (!response.ok) {    // Get error in case the fetch fails
          throw Error("Error fetching the data");
        }
        return response.json();
      })
      .then(data => {           // Fetch OK
        setData(data);
        setIsLoading(false);
        setError(null);
        console.log(data);
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setIsLoading(false);
          setError(error.message);
          console.log(error);
        }
      })

    return () => abortControl.abort();
  }, [url]);

  return { data, isLoading, error };
};
 
export default useFetch;
