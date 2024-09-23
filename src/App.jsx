import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import HeadPhonePage from "./pages/HeadPhonePage";
import SpeakerPage from "./pages/SpeakerPage";
import EarPhonePage from "./pages/EarPhonePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/headphones" element={<HeadPhonePage />} />
      <Route path="/speakers" element={<SpeakerPage />} />
      <Route path="/earphones" element={<EarPhonePage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
