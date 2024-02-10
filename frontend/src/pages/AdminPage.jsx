import { useUser } from "../services/AuthService"

const AdminPage = () => {
    const { user } = useUser();
    return (
            <p>Witaj, {user.name} {user.email} {user.role}</p>
    );
};

export default AdminPage;