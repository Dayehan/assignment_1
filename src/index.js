import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StartScreen from './component/StartScreen';



// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(<Begin />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
     <React.StrictMode>
         <App />
         
     </React.StrictMode>
 )