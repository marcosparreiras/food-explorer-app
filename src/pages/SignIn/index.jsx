import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Form } from './styles';
import { useAuth } from '../../hooks/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.png';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    async function handleSignIn(e) {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Preencha todos os campos');
            return;
        }

        login({ email, password });
    }

    return (
        <Container>
            <img src={logoImg} alt='Food Explorer' />
            <Form onSubmit={handleSignIn}>
                <h1>Faça login</h1>
                <label htmlFor='email'>
                    <span>Email</span>
                    <Input
                        id='email'
                        type='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label htmlFor='password'>
                    <span>Senha</span>
                    <Input
                        id='password'
                        type='password'
                        placeholder='No mínimo 6 caracteres'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <Button title='Entrar' type='submit' />
                <Link to='/signup'>Criar uma conta</Link>
            </Form>
        </Container>
    );
}

export default SignIn;
