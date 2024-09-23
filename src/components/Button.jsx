const Button = ({ style }) => {
  return (
    <button
      className={`${style} text-xs text-black  border border-black px-10 py-5 font-semibold uppercase mt-6  ease-linear  duration-300`}
    >
      <a href=""> See Product</a>
    </button>
  );
};

export default Button;
