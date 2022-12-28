const Button = ({ name, type, onClick, className }) => {
  return (
    <div>
      <button className={className} onClick={() => onClick()} type={type}>
        {name}
      </button>
    </div>
  );
};

export default Button;
