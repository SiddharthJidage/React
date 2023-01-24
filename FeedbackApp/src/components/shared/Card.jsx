import PropTypes from "prop-types";
function Card({ children, reverse }) {
  //conditional class
  //   return (
  //     <div className={`card ${reverse && 'reverse'}` }>{children}</div>
  //   )

  //conditional style
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.protoType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
