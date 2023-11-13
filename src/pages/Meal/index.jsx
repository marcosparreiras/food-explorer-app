import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import api, { fetchWithErrorHandler } from '../../services/api';
import { Container, Main, Content, TagsDiv, Options } from './styles';
import { useOrders } from '../../hooks/orders';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import Tag from '../../components/Tag';
import ROLES from '../../utils/roles';
import orderSvg from '../../assets/order.svg';
import defaultImg from '../../assets/default-meal.png';

/* eslint-disable */
function Meal() {
    const { user } = useAuth();
    const { addOrder } = useOrders();
    const [isAdmin, setIsAdmin] = useState(user.role === ROLES.ADMIN);
    const [meal, setMeal] = useState({});
    const [image, setImage] = useState(defaultImg);
    const [qty, setQty] = useState(1);
    const params = useParams();
    const navigate = useNavigate();

    function handleQtyAdd() {
        setQty((prevState) => ++prevState);
    }

    function handleQtySub() {
        setQty((prevState) => {
            if (prevState - 1 < 1) {
                return prevState;
            }
            return --prevState;
        });
    }

    function handleSendOrder() {
        addOrder(meal, qty);
        setQty(1);
        toast.success(`Pedido adicionado`);
    }

    useEffect(() => {
        async function fetchMeal() {
            const data = await fetchWithErrorHandler(
                'get',
                `meals/${params.id}`
            );
            if (!data) {
                navigate('/');
                return;
            }
            if (data.image) {
                setImage(`${api.defaults.baseURL}/files/${data.image}`);
            }
            setMeal(data);
        }
        fetchMeal();
    }, []);

    return (
        <Container>
            <Header />
            <Main>
                <BackButton to='/' />
                <section>
                    <img src={image} alt='meal' />
                    <Content>
                        <h1>{meal.name}</h1>
                        <p>{meal.description}</p>
                        <TagsDiv>
                            {meal.ingredients &&
                                meal.ingredients.map((ing, index) => (
                                    <Tag title={ing} key={index} />
                                ))}
                        </TagsDiv>
                        <Options>
                            {isAdmin && (
                                <Button
                                    title='Editar prato'
                                    className='edit-btn'
                                    onClick={() => navigate(`/edit/${meal.id}`)}
                                />
                            )}
                            {!isAdmin && (
                                <>
                                    <div>
                                        <button onClick={handleQtySub}>
                                            -
                                        </button>
                                        <span>{qty}</span>
                                        <button onClick={handleQtyAdd}>
                                            +
                                        </button>
                                    </div>
                                    <Button
                                        title={`Incluir R$ ${String(
                                            (meal.price * qty).toFixed(2)
                                        )
                                            .split('.')
                                            .join(',')}`}
                                        svg={orderSvg}
                                        className='order-btn'
                                        onClick={handleSendOrder}
                                    />
                                </>
                            )}
                        </Options>
                    </Content>
                </section>
            </Main>
            <Footer />
        </Container>
    );
}

export default Meal;
