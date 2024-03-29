class RegisterService {
    static async registerUser(userData) {
      try {
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
          }
    
          return await response.text();
        } catch (error) {
          throw new Error(error.message);
        }
    }
  }
  
  export default RegisterService;
  