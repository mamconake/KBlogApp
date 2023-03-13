import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body:'I got you', author:'Kim', id:1},
        {title: 'Welcome Party', body:'It is lit', author:'Mane', id:2},
        {title: 'Top billionares in Africa', body:'I want to be rich', author:'Kim', id:3},
    ]);
    const handleDelete=(id)=>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }
   
    return ( 
        <div className="Home">
           <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>
           <BlogList blogs={blogs.filter((blog)=> blog.author === 'Kim')} title={"Kim's Blogs"}/>
        </div>
     );
}
 
export default Home;