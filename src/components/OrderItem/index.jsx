import { Container } from './styles';
import Button from '../Button';
import theme from '../../styles/theme';
import defaultImg from '../../assets/default-meal.png';
import api from '../../services/api';
import { useOrders } from '../../hooks/orders';

/* eslint-disable */
function OrderItem({ order }) {
    const { changeQty, removeOrder } = useOrders();

    function handleRemoveOrder() {
        if (confirm('Confirme para remover')) {
            removeOrder(order);
        }
    }

    function handleQtyAdd() {
        changeQty(order, order.qty + 1);
    }

    function handleQtySub() {
        if (order.qty - 1 >= 1) {
            changeQty(order, order.qty - 1);
        }
    }

    return (
        <Container>
            <img
                src={
                    order.image
                        ? `${api.defaults.baseURL}/files/${order.image}`
                        : defaultImg
                }
                alt='meal'
            />
            <div className='options'>
                <button onClick={handleQtyAdd}>+</button>
                <span>{order.qty}</span>
                <button onClick={handleQtySub}>-</button>
            </div>
            <div className='total'>
                <h4>{order.name}</h4>
                <p>
                    {order.qty} x R$
                    {order.price.toFixed(2).split('.').join(',')} = R$
                    {(order.qty * order.price).toFixed(2).split('.').join(',')}
                </p>
            </div>
            <Button
                title='Remover'
                onClick={handleRemoveOrder}
                $bgcolor={theme.COLORS.DARK_1000}
            />
        </Container>
    );
}

export default OrderItem;
