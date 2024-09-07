
const Box = ({index, handleClick, value}) => {
    return (
        <span className="box " onClick={() => handleClick(index)}>
            {value}
          </span>
    );
  }
   
  export default Box;