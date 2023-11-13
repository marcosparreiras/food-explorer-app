import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Meal from '../pages/Meal';
import NewMeal from '../pages/NewMeal';
import EditMeal from '../pages/EditMeal';

function AdminRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<NewMeal />} />
            <Route path='/edit/:id' element={<EditMeal />} />
            <Route path='/meal/:id' element={<Meal />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}

export default AdminRoutes;
