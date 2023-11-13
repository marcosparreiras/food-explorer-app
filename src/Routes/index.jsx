import { BrowserRouter } from 'react-router-dom';
import AuhtRoutes from './auth.routes';
import AdminRoutes from './admin.routes';
import CustomerRoutes from './customer.routes';
import { useAuth } from '../hooks/auth';
import ROLES from '../utils/roles';

function Routes() {
    function UserRoutes() {
        const { user } = useAuth();

        switch (user?.role) {
            case ROLES.ADMIN:
                return <AdminRoutes />;
            case ROLES.CUSTOMER:
                return <CustomerRoutes />;
            default:
                return <AuhtRoutes />;
        }
    }

    return (
        <BrowserRouter>
            <UserRoutes />
        </BrowserRouter>
    );
}

export default Routes;
