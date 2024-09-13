const Feature = () => {
  return (
    <div className="mx-5 mb-20">
      <h1 className="text-2xl tracking-wide font-semibold uppercase mb-5">
        features
      </h1>
      <p className=" mb-8">
        Featuring a genuine leather head strap and premium earcups, these
        headphones deliver superior comfort for those who like to enjoy endless
        listening. It includes intuitive controls designed for any situation.
        Whether you’re taking a business call or just in your own personal
        space, the auto on/off and pause features ensure that you’ll never miss
        a beat. The advanced Active Noise Cancellation with built-in equalizer
        allow you to experience your audio world on your terms. It lets you
        enjoy your audio in peace, but quickly interact with your surroundings
        when you need to. Combined with Bluetooth 5. 0 compliant connectivity
        and 17 hour battery life, the XX99 Mark II headphones gives you superior
        sound, cutting-edge technology, and a modern design aesthetic.
      </p>

      <div className="flex text-sm  justify-between">
        <h1 className="text-2xl tracking-wide font-semibold uppercase mb-5">
          in the box
        </h1>

        <div>
          <ul>
            <li className="text-light ">
              {" "}
              <strong className="text-orange mr-5">1x</strong>Headphone unit
            </li>
            <li className="text-light">
              {" "}
              <strong className="text-orange mr-5">2x</strong>Replacement
              earcups
            </li>
            <li className="text-light">
              {" "}
              <strong className="text-orange mr-5">1x</strong>User manual
            </li>
            <li className="text-light">
              {" "}
              <strong className="text-orange mr-5">1x</strong>3.5mm 5m audio
              cable
            </li>
            <li className="text-light">
              {" "}
              <strong className="text-orange mr-5">1x</strong>Travel bag
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
