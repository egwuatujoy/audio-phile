const ProductCover = () => {
  return (
    <div className=" grid grid-cols-[repeat(2,minmax(0,1fr))]  gap-x-6  w-full mb-52   ">
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

      <div>
        <img
          src="/images/ProductCover1.jpg"
          alt=""
          className=" rounded-md h-full"
        />
      </div>
    </div>
  );
};

export default ProductCover;
