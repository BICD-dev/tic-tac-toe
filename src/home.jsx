import { useState, useRef } from "react";

const Home = () => {
  const [val, setVal] = useState("O");
  const [win, setWin] = useState(false)
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [val6, setVal6] = useState("");
  const [val7, setVal7] = useState("");
  const [val8, setVal8] = useState("");
  const [val9, setVal9] = useState("");

  //reset function
//if a user matches three, this func is called
//takes the whole game back to the beginning and outputs the winner
const reset = function(){
    if(win){
       setVal1("")
       setVal2("")
       setVal3("")
       setVal4("")
       setVal5("")
       setVal6("")
       setVal7("")
       setVal8("")
       setVal9("")
        alert(`${val} wins!!`)
        if(val==="X"){setVal("X")}
        else{setVal("O")}
        setWin(false)
    }
}
//condtions to get a strike win
function winCheck(){
    
        if(val1 === val && val2 === val && val3 === val){
            setWin(true)
            // alert(val)
        }else if(val1 === val && val4 === val && val7 === val){
            setWin(true)
        }else if(val1 === val && val5 === val && val9 === val){
            setWin(true)
        }else if(val2 === val && val5 === val && val8 === val){
            setWin(true)
        }else if(val3 === val && val5 === val && val7 === val){
            setWin(true)
        }else if(val3 === val &&val6 === val && val9 === val){
            setWin(true)
        }else if(val7 === val && val8 === val && val9 === val){
            setWin(true)
        }else if(val4 === val && val5 === val &&val6 === val){
            setWin(true)
            // box[i].textContent = ""
        }
        else{
            console.log("nothing here")
        }
        if(win){ reset()} 
    
    
}
  // Handles click events for all boxes
  const handleClick = (index) => {
    winCheck()
    // Decide which state updater function to call based on index
    //also check if a square is already occupied and act accordingly
    switch (index) {
      case 1:
        if(val1 === ""){
            setVal1(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break
      case 2:
        if(val2 === ""){
            setVal2(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 3:
        if(val3 === ""){
            setVal3(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 4:
        if(val4 === ""){
            setVal4(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 5:
        if(val5 === ""){
            setVal5(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 6:
        if(val6 === ""){
            setVal6(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 7:
        if(val7 === ""){
            setVal7(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 8:
        if(val8 === ""){
            setVal8(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      case 9:
        if(val9 === ""){
            setVal9(val === "O" ? "X" : "O");
        }
        else{
            alert("This square is already occupied!!!")
        }
        break;
      default:
        break;
    }

    // Toggle the player turn
    setVal(val === "O" ? "X" : "O");
    // winCheck()
  };

  return (
    <div className="home">
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}
      >
        Tic Tac Toe
      </h1>
      <div className="content">
        <div className="container">
          <span className="box one" onClick={() => handleClick(1)}>
            {val1}
          </span>
          <span className="box two" onClick={() => handleClick(2)}>
            {val2}
          </span>
          <span className="box three" onClick={() => handleClick(3)}>
            {val3}
          </span>
          <span className="box four" onClick={() => handleClick(4)}>
            {val4}
          </span>
          <span className="box five" onClick={() => handleClick(5)}>
            {val5}
          </span>
          <span className="box six" onClick={() => handleClick(6)}>
            {val6}
          </span>
          <span className="box seven" onClick={() => handleClick(7)}>
            {val7}
          </span>
          <span className="box eight" onClick={() => handleClick(8)}>
            {val8}
          </span>
          <span className="box nine" onClick={() => handleClick(9)}>
            {val9}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
