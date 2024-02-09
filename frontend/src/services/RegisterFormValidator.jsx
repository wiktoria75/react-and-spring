class RegisterFormValidator {
    static validate(values) {
      const errors = {};
      if (!values.name) {
        errors.name = 'Name is required';
      } else if (values.name.length < 3 || values.name.length > 40) {
        errors.name = 'Name must be between 3 and 40 characters';
      }
      if (!values.password) {
        errors.password = 'Password is required'; 
      } 
      if (values.password.length < 8 || values.password.length > 16) {
        errors.passwordLength = 'Password must be between 8 and 16 characters';
      } 
      if (!/(?=.*[a-z])/.test(values.password)) {
        errors.passwordLowercaseLetter = 'Password must contain at least one lowercase letter';
      }
      if (!/(?=.*[A-Z])/.test(values.password)) {
        errors.passwordUpercaseLetter = 'Password must contain at least one uppercase letter';
      }
      if (!/(?=.*\d)/.test(values.password)) {
        errors.passwordNumber = 'Password must contain at least one number';
      }
      if (!/(?=.*[@$!%*?&#^()])/.test(values.password)) {
        errors.passwordSpecialCharacter = 'Password must contain at least one special character';
      }
    
      
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }
  }
  
  export default RegisterFormValidator; 