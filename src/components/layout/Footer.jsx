import './Footer.css';
import Container from '../container/Container';


export default function Footer () {
    return (
        <Container>
            <footer>
                <div className='leftside'>
                    <ul>
                        <li><a href="#">CONTACT</a></li>
                        <li><a href="#">TERMS OF SERVICES</a></li>
                        <li><a href="#">SHIPPING AND RETURNS</a></li>
                    </ul>
                    <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                </div>
                <div className='rightside'>
                    <input type="email" placeholder='Give an email, get the newsletter.'/>
                    <div>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>
            </footer>
        </Container>
    )
}