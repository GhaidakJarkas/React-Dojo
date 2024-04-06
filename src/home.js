
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
     );
}
 
export default Home;


// [
//     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
//     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
//     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
// ]