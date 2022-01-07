const ErrorMessage = ({ message }) => {
  const errorMessageStyles = {
    color: "Red",
  };
  return (
    <li style={errorMessageStyles}>
      <p>{message}</p>
    </li>
  );
};

export default ErrorMessage;
