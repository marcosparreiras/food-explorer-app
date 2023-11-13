import { createContext, useContext, useState, useEffect } from 'react';

/* eslint-disable */
const OrdersContext = createContext();

function OrdersProvider({ children }) {
    const [orders, setOrders] = useState([]);

    function addOrder(data, qty) {
        setOrders((prevState) => {
            const alreadyExists = prevState.find((el) => el.id === data.id);
            let newState = [];
            if (!alreadyExists) {
                newState = [...prevState, { ...data, qty }];
            } else {
                newState = prevState.map((el) => {
                    if (el.id === data.id) {
                        el.qty += qty;
                    }
                    return el;
                });
            }
            localStorage.setItem(
                '@foodexplorer:order',
                JSON.stringify(newState)
            );
            return newState;
        });
    }

    function removeOrder(data) {
        setOrders((prevState) => {
            const newState = prevState.filter((el) => el.id !== data.id);
            localStorage.setItem(
                '@foodexplorer:order',
                JSON.stringify(newState)
            );
            return newState;
        });
    }

    function removeAllOrders() {
        setOrders([]);
    }

    function changeQty(data, qty) {
        setOrders((prevState) => {
            const newState = prevState.map((el) => {
                if (el.id === data.id) {
                    el.qty = qty;
                }
                return el;
            });
            localStorage.setItem(
                '@foodexplorer:order',
                JSON.stringify(newState)
            );
            return newState;
        });
    }

    useEffect(() => {
        const ordersFromLocalStorage = JSON.parse(
            localStorage.getItem('@foodexplorer:order')
        );
        if (Array.isArray(ordersFromLocalStorage)) {
            setOrders(ordersFromLocalStorage);
        }
    }, []);

    return (
        <OrdersContext.Provider
            value={{
                orders,
                addOrder,
                removeOrder,
                changeQty,
                removeAllOrders,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
}

function useOrders() {
    const context = useContext(OrdersContext);
    return context;
}

export { OrdersContext, OrdersProvider, useOrders };
