import './BlogCard.css';


export default function BlogCard (props) {
    return (
        <div className='blogCard'>
            <img src={props.image} alt="" />
            <p className='date'>Fashion - October 8, 2020</p>
            <h4>Top Trends From Spring</h4>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero...</p>
            <p className='more'>Read More</p>
        </div>
    )
}