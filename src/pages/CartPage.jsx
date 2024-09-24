import Equipments from "../components/Equipments";
import Feature from "../components/Feature";
import Cart from "../components/Cart";
import ProductCover from "../components/ProductCover";
import ReferProducts from "../components/ReferProducts";
const CartPage = () => {
  return (
    <div className="container px-10">
      <Cart />
      <Feature />
      <ProductCover />
      <ReferProducts />
      <Equipments />
    </div>
  );
};

export default CartPage;
