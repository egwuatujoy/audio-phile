import Equipments from "../components/Equipments";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import ProductCover from "../components/ProductCover";
import ReferProducts from "../components/ReferProducts";
const CartPage = () => {
  return (
    <div>
      <Cart />
      <Feature />
      <ProductCover />
      <ReferProducts />
      <Equipments />
      <Footer />
    </div>
  );
};

export default CartPage;
