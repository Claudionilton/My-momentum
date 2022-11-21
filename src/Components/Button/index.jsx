const Button = ({ name, type, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick()} type={type}>
        {name}
      </button>
    </div>
  );
};

export default Button;
