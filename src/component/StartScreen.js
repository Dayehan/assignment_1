import React , {useState}  from 'react';

// import 'public/style.css';

// function MyButton() {  
   
//     return (
//       <button >
//         Let the game Begin
//       </button>
//     );
//   }
function StartScreen(props) {
  const [name , setName] = useState({
    firstName : '',
});

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
         <input placeholder="numbers only?" type="number" />
         </label>
         <br></br><br></br>
      
    </div>
)
}

export default StartScreen;