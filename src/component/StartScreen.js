import React , {useState}  from 'react';
// import 'public/style.css';


 export default function StartScreen(props) {
  const [name , setName] = useState({
    firstName : '',
});
const handleClick = () => {
  props.changeMethod(2);
};

const handleChange=(e)=>{
  props.changeRounds(e.target.value);
}
return (
    <div className="box" >
         <label>
             First name:
         <input value={name.firstName} onChange={e => {setName({ name , firstName: e.target.value})} } />

         </label>
       
          <br></br>
         <p>Hi, this is {name.firstName}'s math game, choose your parameters and get to calculating!</p>
          <br></br>
         <label> 
         Enter the number of rounds:
         <input placeholder="numbers only?" type="number" min="1" max="20" value={props.round}
          onChange={handleChange} autoFocus/>
         </label>
         <br></br><br></br>
      <button onClick={handleClick}>Click me!</button>


    </div>
)
}

