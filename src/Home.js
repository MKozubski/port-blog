import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My practice site', body: 'ipsum some text', author: 'Bubba Bodiddy', id: 1},
        {title: 'This is practice', body: 'ipsum some text', author: 'Wubly Doubly', id: 2},
        {title: 'Even more practice', body: 'ipsum some text', author: 'Mama Mother', id: 1}
        
    ]);
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>written by {blog.author}</p>
                </div>
            ))};

        </div>
     );
}
 
export default Home;