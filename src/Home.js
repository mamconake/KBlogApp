import { useState } from "react";
const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body:'I got you', author:'Jeff', id:1},
        {title: 'Welcome Party', body:'It is lit', author:'Mane', id:2},
        {title: 'Top billionares in Africa', body:'I want to be rich', author:'Kim', id:3},
    ])
   
    return ( 
        <div className="Home">
            {blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
            ))}
        </div>
     );
}
 
export default Home;