import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';

function App() {
const [num,setNum] = useState(0);
const {register,handleSubmit,errors} = useForm()
const final = (x) =>{

  if(x.operator==="+"){
   return( setNum(parseFloat(x.firstnum)+parseFloat(x.secondnum)+parseFloat(x.thirdnum)));
  }
  else if(x.operator==='*'){
    return( setNum(parseFloat(x.firstnum)*parseFloat(x.secondnum)*parseFloat(x.thirdnum)));
  }
}

  return (
    <div className="App bg-dark mt-5 text-light w-75 ml-auto mr-auto">
      <h1 className = "badge-lg badge-info mb-4">{num}</h1>
      <form className = "group-form" onSubmit = {handleSubmit(final)} >
        First number:<input type = "text" name ="firstnum" placeholder = "first number" ref = {register({required:true})} className = "form-control w-50 ml-auto mr-auto"/>
        {errors.firstnum && 'First number is required'}
        <br></br>
        Second number:<input type = "text" name ="secondnum" placeholder = "second number" ref = {register({required:true})} className = "form-control w-50 ml-auto mr-auto"/>
        {errors.secondnum && 'Second number is required'}
        <br></br>
        Third number:<input type = "text" name ="thirdnum" placeholder = "third number" ref = {register({required:true})} className = "form-control w-50 ml-auto mr-auto"/>
        {errors.thirdnum && 'Third number is required'}
        <br></br>
        Operator:<input type = "text" name ="operator" placeholder = "operator" ref = {register({required:true})} className = "form-control w-50 ml-auto mr-auto"/>
        {errors.operator && 'Operator is required'}
        <br></br>
        
        <button type = "submit" className = "mb-4">Calculate</button>
      </form>
    </div>
  );
}

export default App;
