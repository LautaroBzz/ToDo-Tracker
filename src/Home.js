
import FullList from "./FullList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isLoading, error} = useFetch("http://localhost:8000/db");

  return (
    <div className='home'>
      { error && <div> {error} </div> }
      { isLoading && <div>Just a moment...</div> }
      { data && <FullList data={data} title='Your ToDo' /> }  
    </div>
  )
};
 
export default Home; 