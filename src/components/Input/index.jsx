import { Container, Label } from './styles';

/* eslint-disable */
function Input({ icon: Icon, id, label, className, ...rest }) {
    return (
        <Container className={className}>
            {label && <Label htmlFor={id}>{label}</Label>}
            <div>
                {Icon && <Icon />}
                <input id={id} {...rest} />
            </div>
        </Container>
    );
}

export default Input;
