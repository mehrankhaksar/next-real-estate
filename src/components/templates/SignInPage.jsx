import AuthenticationForm from "../modules/AuthenticationForm";

const SignInPage = () => {
  return (
    <section className="w-full h-[calc(100vh-85px)]">
      <div className="w-full h-full container mx-auto">
        <div className="w-full h-full flex justify-center items-center">
          <AuthenticationForm />
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
