
import { Link } from "react-router-dom";

const FullList = ({ data, title }) => { 
  return (
    <div className='blog-list'>
      <h2> {title} </h2>
      {data.db.map((td) => (
        <div className='blog-preview' key={td.id}>
          <Link to={`/db/${td.id}`}>             
            <h2> {td.title} </h2>
            <p> Written by {td.author} </p>
          </Link>
        </div>
      ))}
    </div>
  )
};
  
export default FullList;