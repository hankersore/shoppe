import './BlogContent.css';
import img1 from '../../assets/Img 01.png'
import img2 from '../../assets/Img 02.png'
import img3 from '../../assets/Img 03.png'
import img4 from '../../assets/Img 04.png'
import BlogCard from '../blogCard/BlogCard';
import Container from '../container/Container';


export default function BlogContent () {
    const blogs = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        }
    ]
    return (
        <Container>
            <div className='blogContent'>
            {blogs.map((item, id) => (
     <BlogCard key={id} image={item.image}/>))}
        </div>
        </Container>
    )
}