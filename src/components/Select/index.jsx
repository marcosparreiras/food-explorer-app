import { Container, Label } from './styles';
import { IoIosArrowDown } from 'react-icons/io';

/* eslint-disable */
function Select({ id, label, options, className, ...rest }) {
    return (
        <Label htmlFor={id} className={className}>
            <span>{label}</span>
            <IoIosArrowDown />
            <Container id={id} {...rest}>
                {options &&
                    options.map((opt, index) => (
                        <option value={opt} key={String(index)}>
                            {opt}
                        </option>
                    ))}
            </Container>
        </Label>
    );
}

export default Select;
