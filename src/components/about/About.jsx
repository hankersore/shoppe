import './About.css';
import img1 from '../../assets/Img 01.png'
import img4 from '../../assets/Img 04.png'

export default function About () {
    return (
        <div className='about'>
            <h3 style={{textAlign:'center'}}>About</h3>
            <p style={{textAlign:'center'}}>Who we are and why we do what we do!</p>
            <p>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
            <h3>Top trends</h3>
            <img src={img1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.</p>
            <ul>
                <li>consectetur adipiscing elit. Aliquam placerat</li>
                <li>Lorem ipsum dolor sit amet consectetur </li>
            </ul>
            <h3>Produced with care</h3>
            <img src={img4} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.</p>
        </div>
    )
}