import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchWithErrorHandler } from '../../services/api';
import { Container, Form } from './styles';
import Input from '../../components/input';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleSingUp(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Preencha todos os campos');
            return;
        }

        const data = await fetchWithErrorHandler('post', '/users', {
            name,
            email,
            password,
        });

        if (data) {
            toast.success('Conta criada com sucesso');
            navigate('/');
        }
    }

    return (
        <Container>
            <img src={logo} alt='Food Explorer' />
            <Form onSubmit={handleSingUp}>
                <h1>Crie sua conta</h1>
                <label htmlFor='name'>
                    <span>Seu nome</span>
                    <Input
                        id='text'
                        type='name'
                        placeholder='Exemplo: Maria da Silva'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
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
                <Button title='Criar conta' type='submit' />
                <Link to='/'>Já tenho uma conta</Link>
            </Form>
        </Container>
    );
}

export default SignUp;
