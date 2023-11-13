import { Container } from './styles';
import { FiPlus, FiX } from 'react-icons/fi';

/* eslint-disable */
function CreateTag({ onClick, edit = false, ...rest }) {
    return (
        <Container $edit={edit}>
            <input
                type='text'
                readOnly={!edit}
                {...rest}
                placeholder={edit ? 'Adicionar' : ''}
            />
            <button type='button' onClick={onClick}>
                {edit ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}

export default CreateTag;
