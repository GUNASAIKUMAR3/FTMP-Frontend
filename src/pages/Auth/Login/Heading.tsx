
const Heading = ({ title, subtitle }) => {
    return (
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">{title}</h1>
        <p className="text-primary">{subtitle}</p>
      </div>
    );
  };
  
  export default Heading;
  