import { Container } from './styles';
import { IoIosArrowBack } from 'react-icons/io';

/* eslint-disable */
function BackButton({ to, ...rest }) {
    return (
        <Container to={-1} {...rest}>
            <IoIosArrowBack /> Voltar
        </Container>
    );
}

export default BackButton;
