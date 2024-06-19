const Button = (props) => {
  const { classname = "bg-indigo-600", children, onClick = () => {}, type = "button" } = props;
  return (
    <button className={`${classname} text-white font-bold py-2 px-6 rounded active:translate-y-1`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
