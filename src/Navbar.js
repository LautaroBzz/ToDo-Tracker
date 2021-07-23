
import { Link } from "react-router-dom";

const Navbar = () => {
  return (  
    <nav className="navbar">
      <h1>A Basic To Do List (Using React)</h1>
      <div className="links">
        <Link to="/">Home</Link>     
        <Link to="/create">Add New</Link>
      </div>
    </nav>
  );
};
 
export default Navbar;