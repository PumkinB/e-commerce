import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <div>
      <AuthLayout title="Register" type="register">
        <FormRegister />
      </AuthLayout>
    </div>
  );
};

export default RegisterPage;
