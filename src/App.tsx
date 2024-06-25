import { RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// import ListPage from "./pages/ListPage";
// import DetailPage from "./pages/DetailPage";
// import MyNFTPage from "./pages/MyNFTPage/MyNFTPage";
// import Affiliate from "./pages/Affiliate";
// import LandingPage from "./pages/LandingPage";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        // { path: "/affiliate", element: <Affiliate /> },
        // { path: "landing", element: <LandingPage /> },
        // { path: "/detail", element: <DetailPage /> },
        // { path: "/my-nft", element: <MyNFTPage /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ];
  return useRoutes(routes);
}

export default App;
