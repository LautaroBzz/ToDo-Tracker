
import { useState } from "react";
import { useHistory } from "react-router-dom";    

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();   
    const toDo = { title, body, author };
    setIsLoading(true);
    fetch('http://localhost:8000/db', {
      method: "POST",
      body: JSON.stringify(toDo),
      headers: {"Content-Type": "application/json"},
    }).then(() => {
      console.log("New toDo Added");
      setIsLoading(false);
      history.push("/");
    })
  };

  return (
    <div className='create'>
      <h2>Add New To Do</h2>
      <form onSubmit={handleSubmit}>

        <label>Title: </label>
        <input
          type='text'
          required
          placeholder='Start over here...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Body: </label>
        <textarea
          cols="30"
          rows="11"
          required
          placeholder='What is this about...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>From: </label>
        <input
          type='text'
          required
          placeholder='Who wrote that tedious task??'
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}
        />

        { !isLoading && <button>Add</button> }
        { isLoading && <button>Adding...</button> }
      </form>
    </div>
  )
};
 
export default Create;
