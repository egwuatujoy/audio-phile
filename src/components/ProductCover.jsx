const ProductCover = () => {
  return (
    <div className="mx-5 mb-20">
      <div className="grid grid-cols-2 gap-x-6  ">
        <div>
          <img
            src="/images/ProductCover2.jpg"
            alt=""
            className="rounded-md  mb-4 
    "
          />
          <img
            src="/images/ProductCover3.jpg"
            alt=""
            className="rounded-md
    "
          />
        </div>

        <img
          src="/images/ProductCover1.jpg"
          alt=""
          className="rounded-md h-full"
        />
      </div>
    </div>
  );
};

export default ProductCover;
