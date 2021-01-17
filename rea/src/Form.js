import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Form(){
    const {register,handleSubmit,errors} = useForm();
    const final = (x) => {console.log(x)};
    const {num,setNum} = useState();
    return(

    //Main form div
    
        <div  className = "bg-dark mt-5 text-light w-25 ml-auto mr-auto">

    {/*This is the exercise form*/}
            <from className = "" onSubmit = {handleSubmit(final)}>

    {/*Insert the first number and check for errors*/}
               <label className = "mt-5">First Number: </label>
               <input className = "ml-4 " type="text" name = "firstname" ref = {register({required : true})}/>
               {errors.firstname && 'Insert a number'}

            <br/>

    {/*Insert the second number and check for errors*/}
               <label className = "">Second Number: </label>
               <input className = "ml-3 mr-3" type="text" name = "firstname" ref = {register({required : true})}/>
               {errors.firstname && 'Insert a number'}

            <br/>

    {/*Insert the third number and check for errors*/}
               <label>Third Number:</label>
               <input className = "ml-3" type="text" name = "firstname" ref = {register({required : true})}/>
               {errors.firstname && 'Insert a number'}

            <br/>
    
    {/*This is the submit button*/}
               <Button classname = "btn btn-info" className = "mb-5 mt-3 ml-3" type = 'submit'>Submit</Button>

            </from>
        </div>
              
    );

    
}

export default Form;