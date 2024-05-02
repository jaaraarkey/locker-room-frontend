import Sidebar from "../../Components/Sidebar/Sidebar";
import MessageContainer from "../../Components/MessageContainer/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450] md:h-[450] rouned-lg overflow-hidden bg-slate-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opcity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
