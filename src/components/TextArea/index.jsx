import { Container, Label } from './styles';

/* eslint-disable */
function TextArea({ id, label, ...rest }) {
    return (
        <div>
            {label && <Label htmlFor={id}>{label}</Label>}
            <Container id={id} {...rest} />
        </div>
    );
}

export default TextArea;
