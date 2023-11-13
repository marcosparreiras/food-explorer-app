import { useEffect, useState } from 'react';
import { Container, Main, Head, Foot } from './styles';
import { useOrders } from '../../hooks/orders';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackButton from '../../components/BackButton';
import Button from '../../components/Button';
import OrderItem from '../../components/OrderItem';
import theme from '../../styles/theme';
import { toast } from 'react-toastify';

/* eslint-disale */
function Order() {
    const { orders, removeAllOrders } = useOrders();
    const [total, setTotal] = useState(0);

    function handleClearOrders() {
        if (confirm('Confirme para remover todos')) {
            removeAllOrders();
        }
    }

    function handlePayment() {
        toast('Funcionalidade não implementada');
    }

    useEffect(() => {
        if (orders.length === 0) {
            setTotal(0);
            return;
        }
        const totalToAdd = orders.reduce((acc, cur) => {
            return acc + cur.price * cur.qty;
        }, 0);
        setTotal(totalToAdd);
    }, [orders]);

    return (
        <Container>
            <Header />
            <Main>
                <BackButton />
                <section>
                    <Head>
                        <h1>Pedido</h1>
                        <Button
                            title='Limpar'
                            $bgcolor={theme.COLORS.TOMATO_400}
                            onClick={handleClearOrders}
                            disabled={orders.length <= 0}
                        />
                    </Head>
                    {orders.length > 0 &&
                        orders.map((order, index) => (
                            <OrderItem
                                key={index * Math.random()}
                                order={order}
                            />
                        ))}
                    {orders.length === 0 && <h5>Nenhum pedido adcionado</h5>}
                    <Foot>
                        <div>
                            <h4>Total</h4>
                            <p>R$ {total.toFixed(2).split('.').join(',')}</p>
                        </div>
                        <Button
                            title='Ir para o pagamento'
                            onClick={handlePayment}
                        />
                    </Foot>
                </section>
            </Main>
            <Footer />
        </Container>
    );
}

export default Order;
