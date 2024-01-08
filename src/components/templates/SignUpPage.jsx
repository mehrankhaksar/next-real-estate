import AuthenticationForm from "../modules/AuthenticationForm";

const SignUpPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        <AuthenticationForm signUp />
      </div>
    </section>
  );
};

export default SignUpPage;
