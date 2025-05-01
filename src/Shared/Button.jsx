const Button = ({ title }) => {
  return (
    <div>
      <button className="btn btn-outline uppercase border-0 border-b-4 border-yellow-600">
        {title}
      </button>
    </div>
  );
};

export default Button;
