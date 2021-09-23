
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch('http://localhost:8000/db/' + id);

  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/db/' + data.id, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    })
  };

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && (
        <article>
          <h2> {data.title} </h2>
          <p> Written by {data.author} </p>
          <div> {data.body} </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
};
 
export default Details;