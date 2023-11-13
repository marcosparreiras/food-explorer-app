import { Container, Label } from './styles';

/* eslint-disable */
function FileInput({ icon: Icon, id, label, placeholder, className, ...rest }) {
    return (
        <Label htmlFor={id} className={className}>
            <span>{label}</span>
            <Container>
                {Icon && <Icon />}
                <span>{placeholder}</span>
                <input id={id} type='file' {...rest} />
            </Container>
        </Label>
    );
}

export default FileInput;
