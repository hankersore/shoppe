import './Showcase.css';
import Container from '../container/Container';
import showcase from '../../assets/showcase.png'

export default function Showcase () {
    return (
        <Container>
            <img src={showcase} alt="" className='showcase' />
        </Container>
    )
}