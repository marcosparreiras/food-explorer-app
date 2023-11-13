import { Container } from './styles';
import cookiesImg from '../../assets/cookiesAndFruits.png';

function Banner() {
    return (
        <Container>
            <img src={cookiesImg} alt='Foods' />
            <div>
                <h2>Sabores inigualáveis</h2>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
        </Container>
    );
}

export default Banner;
