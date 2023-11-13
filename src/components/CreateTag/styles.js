import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.6rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 1rem 1.6rem;
    background: ${({ theme, $edit }) =>
        $edit ? 'none' : theme.COLORS.LIGHT_600};
    border: ${({ theme, $edit }) =>
        $edit ? `1px dashed ${theme.COLORS.LIGHT_600}` : 'none'};

    > input {
        background: none;
        border: none;
        outline: none;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > button {
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
        background: none;
        border: none;
        display: grid;
        place-items: center;

        svg {
            color: ${({ theme, $edit }) =>
                $edit ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
        }
    }
`;
