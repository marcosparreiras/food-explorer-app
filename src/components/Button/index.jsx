import { Container } from './styles';

/* eslint-disable */
function Button({ title, svg, ...rest }) {
    return (
        <Container {...rest}>
            {svg && <img src={svg} alt='svg' />}
            {title}
        </Container>
    );
}

export default Button;
