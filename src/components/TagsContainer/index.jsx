import { Container, Label } from './styles';

/* eslint-disable */
function TagsContainer({ children, label, ...rest }) {
    return (
        <Container {...rest}>
            <Label>{label}</Label>
            <div>{children}</div>
        </Container>
    );
}

export default TagsContainer;
