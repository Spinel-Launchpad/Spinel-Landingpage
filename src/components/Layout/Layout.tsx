
import { Outlet } from "react-router-dom";
import { HEADER_HEIGHT } from "../../constants/dimensions";
import "./Layout.css";
import Footer from "../Shared/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Shared/Header";
function Layout() {
  return (
    <main className="bg-white ">
     <Header />
      <article
        className="mt-0 pb-8 mx-auto bg-main"
        style={{
          paddingTop: HEADER_HEIGHT,
        }}
      >
        <div className="px-0 ">
          <Outlet />
        </div>
      </article>
    <Footer />
    </main>
  );
}

export default Layout;
