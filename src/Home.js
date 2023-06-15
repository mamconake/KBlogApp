import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const[blogs, setBlogs] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);
    const handleDelete=(id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
    useEffect(()=>{
        setTimeout(()=>{
            fetch(' http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data=>{
            //console.log(data);
            setBlogs(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(err =>{
            setIsLoading(false);
            setError(err.message);
        })
        }, 1000);
    }, []);
   
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