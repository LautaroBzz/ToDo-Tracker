
import { useState } from "react";
import { useHistory } from "react-router-dom";    

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("You of course...");
  const [isLoading, setIsLoading] = useState(false);

  const backToHome = useHistory();

  // prevent loss of data when refresing page
  const handleSubmit = (event) => {
    event.preventDefault();   

    const toDo = {title, body, author};
    setIsLoading(true);

    fetch('http://localhost:8000/db', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(toDo)
    }).then(() => {
      console.log("New toDo Added");
      setIsLoading(false);
      // take me to "Home" after adding new ToDo...
      backToHome.push("/");
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
        <select 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}>
          <option value='x'>A</option>
          <option value='y'>B</option>
          <option value='z'>C</option>
        </select>

        { !isLoading && <button>Add</button> }
        { isLoading && <button>Adding...</button> }
      </form>
    </div>
  )
};
 
export default Create;
