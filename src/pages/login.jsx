import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Login" type="login">
        <FormLogin />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
