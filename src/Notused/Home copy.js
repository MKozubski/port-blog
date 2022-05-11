import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Mike');

    const handleClick = () => {
        setName('Mikey');
    }
    const handleClickAgain = (name) => {
        setName(name);
    }

    return ( 
        <div className="home">
            <h2>
                Homepage
            </h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleClickAgain('Michael')}}>Click This</button>
        </div>
     );
}
 
export default Home;