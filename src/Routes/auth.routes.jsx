import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

function AuhtRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<SignIn />} />
        </Routes>
    );
}

export default AuhtRoutes;
