import ProductName from "./ProductName";

const MainRow2 = () => {
  return (
    <div>
      <img src="/images/EarphoneRow.jpg" alt="" />
      <div>
        <ProductName
          name={"yx1 earphones"}
          style={
            "text-2xl tracking-wide  text-center font-bold uppercase mt-7"
          }
        />
      </div>
    </div>
  );
};

export default MainRow2;
