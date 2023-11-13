import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FiLogOut, FiX } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useOrders } from '../../hooks/orders';
import { Container, SmScreen, LgScreen, Menu } from './styles';
import Input from '../Input';
import Button from '../Button';
import Footer from '../Footer';
import ROLES from '../../utils/roles';
import logoImg from '../../assets/logo.png';
import logoAdminImg from '../../assets/logo-admin.png';
import orderSvg from '../../assets/order.svg';

/* eslint-disable */
function Header({ search, setSearch }) {
    const { orders } = useOrders();
    const { logout, user } = useAuth();
    const [isAdmin, setIsAdmin] = useState(user.role === ROLES.ADMIN);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setShowMenu((prevState) => !prevState);
    }

    return (
        <Container>
            <SmScreen>
                <button onClick={toggleMenu} className='tg-menu'>
                    <RxHamburgerMenu />
                </button>
                <div className='logo'>
                    <img
                        src={logoImg}
                        alt='Food Explorer'
                        onClick={() => navigate('/')}
                    />
                    {isAdmin && <span>Admin</span>}
                </div>
                {!isAdmin && (
                    <button onClick={() => navigate('/order')}>
                        <img src={orderSvg} alt='order svg' />
                        <span>{orders.length}</span>
                    </button>
                )}
                <Menu data-show={showMenu}>
                    <section className='head'>
                        <button onClick={toggleMenu}>
                            <FiX /> Menu
                        </button>
                    </section>
                    <section className='main'>
                        <Input
                            icon={AiOutlineSearch}
                            type='text'
                            placeholder='Busque por pratos ou ingredientes'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        {isAdmin && (
                            <button onClick={() => navigate('/new')}>
                                Novo prato
                            </button>
                        )}
                        <button onClick={logout}>Sair</button>
                    </section>
                    <Footer />
                </Menu>
            </SmScreen>
            <LgScreen>
                <img
                    src={isAdmin ? logoAdminImg : logoImg}
                    alt='Food Explorer'
                    className='logo'
                    onClick={() => navigate('/')}
                />

                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    type='text'
                    icon={AiOutlineSearch}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {!isAdmin && (
                    <Button
                        title={`Pedidos (${orders.length})`}
                        svg={orderSvg}
                        onClick={() => navigate('/order')}
                    />
                )}
                {isAdmin && (
                    <Button
                        title='Novo prato'
                        onClick={() => navigate('/new')}
                    />
                )}
                <button className='btn-logout' onClick={logout}>
                    <FiLogOut />
                </button>
            </LgScreen>
        </Container>
    );
}

export default Header;
