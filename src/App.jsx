import "./App.css";
import LogoutButton from "./components/LogoutButton";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <div>
        <LoginPage />
        <LogoutButton />
      </div>
    </>
  );
}

export default App;
