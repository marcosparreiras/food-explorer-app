import { Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from '../hooks/favorites';
import Home from '../pages/Home';
import Meal from '../pages/Meal';
import Order from '../pages/Order';

function CustomerRoutes() {
    return (
        <FavoritesProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
                <Route path='/meal/:id' element={<Meal />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </FavoritesProvider>
    );
}

export default CustomerRoutes;
