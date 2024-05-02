import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <div className="p-4 h-screen flex items-center ">
        {/* <Login />
        <Signup /> */}
        <Home />
      </div>
    </>
  );
};

export default App;
