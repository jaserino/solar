import componentButton from '../styles/Button.module.css';

const Button = (type, background, className, id, onClick, children) => {
  return (
    <button
      type={type ? type : 'button'}
      background={background}
      className={className ? `btn-component ${className}` : 'btn-component'}
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
