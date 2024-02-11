class StudentService {
  static async getAllStudents(token) {
    try {
      const response = await fetch('http://localhost:8080/admin/students', {
        headers: {
            "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText)
      }
        return await response.json(); 
      } catch (error) {
        throw new Error(error.message);
      }
  }
}
  
export default StudentService;