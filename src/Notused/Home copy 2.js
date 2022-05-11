import { useState, useEffect } from 'react';
import BlogList from '../BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My practice site', body: 'ipsum some text', author: 'Bubba Bodiddy', id: 1},
        {title: 'This is practice', body: 'ipsum some text', author: 'Wubly Doubly', id: 2},
        {title: 'Even more practice', body: 'ipsum some text', author: 'Mama Mother', id: 3}
        
    ]);

    const  [name, setName] = useState('Mike');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(() => {
        console.log('use effect ran');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('John')}>Change Name</button>
            <p>{name}</p>
           {/*} <BlogList blogs={blogs.filter((blog) => blog.author === "Bubba Bodiddy")} title="Bubba's Blogs"/>{*/}
        </div>
     );
}
 
export default Home;