import { Container } from './styles';
import logoWhite from '../../assets/logo-white.png';

function Footer() {
    return (
        <Container>
            <img src={logoWhite} alt='Food Explorer' />
            <p>&copy; 2023 - Todos os direitos reservados.</p>
        </Container>
    );
}

export default Footer;
