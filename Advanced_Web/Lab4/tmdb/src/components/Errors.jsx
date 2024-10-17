import ErrorImg from "../assets/images/error.webp";

const Error = ({ isVisible }) => {
  return (
    <>
      <div
        style={{
          display: isVisible ? "block" : "none", // Show or hide based on isVisible
        }}
      >
        <img src={ErrorImg} alt="Error" width="100%" />
      </div>
    </>
  );
};

export default Error;
