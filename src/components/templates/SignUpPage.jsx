import AuthenticationForm from "../modules/AuthenticationForm";

const SignUpPage = () => {
  return (
    <section>
      <div>
        <AuthenticationForm signUp={true} />
      </div>
    </section>
  );
};

export default SignUpPage;
