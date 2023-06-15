import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isLoading, error, handleDelete} = useFetch(' http://localhost:8000/blogs');
   
    return ( 
        <div className="Home">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'Kim')} title={"Kim's Blogs"}/> */}
         {/* {blogs &&  <button onClick={()=> setName('Korir')}>change name</button>} */}
        </div>
     );
}
 
export default Home;