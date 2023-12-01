import AuthenticationForm from "../modules/AuthenticationForm";

const SignUpPage = () => {
  return (
    <section>
      <div className="h-full container flex justify-center items-center mx-auto">
        <AuthenticationForm signUp={true} />
      </div>
    </section>
  );
};

export default SignUpPage;
