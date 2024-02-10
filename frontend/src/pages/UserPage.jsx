import { useUser } from "../services/AuthService"

const UserPage = () => {
    const { user } = useUser();
    return (
            <p>Witaj, {user.role} {user.email}</p>
    );
};

export default UserPage;