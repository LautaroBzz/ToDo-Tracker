
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const { id } = useParams();
  const { data: toDo, isLoading, error } = useFetch('http://localhost:8000/db/' + id);

  const backToHome = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/db/' + toDo.id, {
      method: "DELETE"
    }).then(() => {
      backToHome.push("/");
    })
  };

  return (
    <div className="blog-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { toDo && (
        <article>
          <h2> {toDo.title} </h2>
          <p> Written by {toDo.author} </p>
          <div> {toDo.body} </div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
};
 
export default Details;