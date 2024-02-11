class StudentService {
    static async getAllStudents() {
      const exampleStudents = [
        { id: 1, name: 'John Doe', email: 'john@example.com', booksCount: 5 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', booksCount: 3 },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', booksCount: 2 },
      ];
      return exampleStudents;
    }
  }
  
  export default StudentService;