import Header from "../components/Header";
import { useUser } from "../services/AuthService"

const UserPage = () => {
    const { user } = useUser();
    return (
        <div>
          <Header>
            <p>Witaj, {user.role} {user.email}</p>
          </Header> 
        </div>
    );
};

export default UserPage;