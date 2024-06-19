import Button from "../Elements/Button/Button";
import InputForm from "../Elements/input";

const FormRegister = () => {
  return (
    <form>
      <InputForm label="Full Name" type="text" placeholder="Insert Your Name" name="fullname"></InputForm>
      <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"></InputForm>
      <InputForm label="Password" type="password" placeholder="*****" name="password"></InputForm>
      <InputForm label="Confirm Password" type="password" placeholder="*****" name="confirmPassword"></InputForm>
      <Button>Login</Button>
    </form>
  );
};

export default FormRegister;
