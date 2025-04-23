import Card from "../Card/Card"
import Heading from "../Heading/Heading"
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import Tab from "../Tab/Tab";
import Button from"../Button/Button";
import { useState } from "react";
import './login.css';
function Login (){
          const [formdata,Setformdata] = useState({
            email:'',
            password:''
          });
        
          const handleChange = (e) => {
            const { name, value } = e.target;
            Setformdata(prevState => ({
              ...prevState,
              [name]: value
            }));
          };
        
              const handleSubmit = (event) => {
                event.preventDefault();
                console.log(formdata);
                // Do something with the value
              };
        

    return (

      
        <Card onSubmit={handleSubmit}>
            
            <Heading  title="Login Form"/> 
            <Btn/>   
            <Input  tp="text" ph="Enter Email" name="email" onChange={handleChange}/>  
            <Input  tp="password" ph="Password" name="password" onChange={handleChange}/> 
            <Tab link="href" tb="Forget password?"/>
            <Button lk="Login"/>
            <Tab para="Not a Member?" link="href" tb="signup now"/>
        </Card>
    )
}
export default Login;