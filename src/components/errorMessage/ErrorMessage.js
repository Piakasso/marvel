import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <div>
      <span
        style={{
          display: "block",
          margin: "0 auto",
          fontSize: "18px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Error 404
      </span>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "auto",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error"
      />
    </div>
  );
};

export default ErrorMessage;
