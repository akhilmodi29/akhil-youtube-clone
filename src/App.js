import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import SearchResults from "./components/SearchResults";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      },
      {
        path: "results",
        element: <SearchResults/>
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;