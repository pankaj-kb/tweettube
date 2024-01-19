import LoginComponent from "../components/LoginComponent";
const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center gap-[20px] h-screen w-screen bg-[#FDCD44]">
      <img
        className="bg-[#FDCD44] hidden md:block h-[30%] w-[30%]"
        src="/images/login-page/login-background.png"
        alt="login-background"
      />
      <div>
        <div className="flex flex-col items-center">
          <h1>Hey explorer!</h1>
          <h2>Login please</h2>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;
