import "./page1.css";
import Header from "../../Header/Header";
import Profile from "./Profile";

function Page1() {
  return (
    <div className="area relative">
      {/* Animated background layer */}
      <ul className="circles absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      {/* Overlay content */}
      <div className="relative text-white text-center pt-5 pb-5">
        <Header/>
      </div>
      <div className="relative bg-transparent text-white"> 
        <Profile/>
      </div>
    </div>
  );
}

export default Page1;
