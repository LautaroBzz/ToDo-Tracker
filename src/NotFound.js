
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Page cannot be found...</h2>
      <Link to="/" className="back">Back to Home</Link>
    </div>
  );
};
 
export default NotFound;