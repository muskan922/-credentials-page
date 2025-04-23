import Card from "../Card/Card"
import Heading from "../Heading/Heading"
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import Button from"../Button/Button";
import './Signup.css';
import { useState } from "react";
function Signup (){

              const [formdata,Setformdata] = useState({
                email:'',
                password:'',
                confirm_password:''
              });
            
              const handleChange = (e) => {
                const { name, value} = e.target;
                Setformdata(prevState => ({
                  ...prevState,
                  [name]: value 
                }));
              };
            
                  const handleSubmit = (event) => {
                    event.preventDefault();
                    console.log(formdata);
                
                  };
            
    return (

      
        <Card onSubmit={handleSubmit}>
            
            <Heading  title="Signup Form"/> 
            <Btn/>   
            <Input  tp="text" name='email' ph="Enter Email" onChange={handleChange}/>  
            <Input  tp="password" ph="Password" name='password' onChange={handleChange}/>
            <Input  tp="password" name='confirm_password' ph="Confirm password" onChange={handleChange}/> 
            <Button lk="Signup"/>
        
        </Card>
    )
}
export default Signup;