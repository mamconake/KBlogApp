import { useState } from "react";
const Home = () => {
    //let name = "Dev";
    const [name, setName] = useState('Dev');
    const [age, setAge] = useState(20);
    const handleClick = () =>{
        setName('luigi');
        setAge(33);
    }
   
    return ( 
        <div className="Home">
            <p>{name} is {age} years old</p>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;