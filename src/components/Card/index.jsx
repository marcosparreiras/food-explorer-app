import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFavorites } from '../../hooks/favorites';
import { Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiEdit2 } from 'react-icons/fi';
import { Container, Options } from './styles';
import Button from '../Button';
import { useAuth } from '../../hooks/auth';
import { useOrders } from '../../hooks/orders';
import ROLES from '../../utils/roles';
import api from '../../services/api';
import defaultImg from '../../assets/default-meal.png';

/* eslint-disable */
function Card({ data }) {
    const { user } = useAuth();
    const { addOrder } = useOrders();
    const imageUrl = data.image
        ? `${api.defaults.baseURL}/files/${data.image}`
        : defaultImg;
    const [image, setImage] = useState(imageUrl);
    const [isAdmin, setIsAdmin] = useState(user.role === ROLES.ADMIN);
    const [like, setLike] = useState(false);
    const [qty, setQty] = useState(0);
    const navigate = useNavigate();

    let handleLikeButton = function () {
        setLike((prevState) => !prevState);
    };

    if (user.role === ROLES.CUSTOMER) {
        const { toggleFavorite, checkIfIsFav, favorites } = useFavorites();
        useEffect(() => {
            if (checkIfIsFav(data)) {
                setLike(true);
            } else {
                setLike(false);
            }
        }, [favorites]);

        handleLikeButton = function () {
            setLike((prevState) => !prevState);
            toggleFavorite(data);
        };
    }

    function handleQtyAdd() {
        setQty((prevState) => ++prevState);
    }

    function handleQtySub() {
        setQty((prevState) => {
            if (prevState - 1 < 0) {
                return prevState;
            }
            return --prevState;
        });
    }

    function handleSendOrder() {
        if (qty <= 0) {
            toast.error('Defina uma quantidade para adicionar');
            return;
        }
        addOrder(data, qty);
        setQty(0);
        toast.success(`Pedido adicionado`);
    }

    return (
        <Container $like={like}>
            {!isAdmin && (
                <FiHeart className='like' onClick={handleLikeButton} />
            )}
            {isAdmin && (
                <FiEdit2 onClick={() => navigate(`/edit/${data.id}`)} />
            )}

            <img src={image} alt='meal' />
            <Link to={`meal/${data.id}`}>
                <h3>{data.name} &gt;</h3>
            </Link>
            <p>{data.description}</p>
            <span>R$ {String(data.price.toFixed(2)).split('.').join(',')}</span>
            {!isAdmin && (
                <Options>
                    <div>
                        <button onClick={handleQtySub}>-</button>
                        <span>{qty}</span>
                        <button onClick={handleQtyAdd}>+</button>
                    </div>
                    <Button title='Enviar' onClick={handleSendOrder} />
                </Options>
            )}
        </Container>
    );
}

export default Card;
