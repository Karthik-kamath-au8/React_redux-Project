import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const initialState ={
             name:"",
            email:"",
            password:"",
            nameError:"",
            emailError:"",
            passwordError:""

}

export default class Loginform extends Component {
        state= initialState ;
    
        handleChange=event =>{
            this.setState({
                [event.target.name]: event.target.value
            });
        };
        validate =() => {
            let nameError="";
            let emailError="";
            let passwordError="";

            if(this.state.name.length === 0){
                nameError="should not be empty"
            }

            if(!this.state.email.includes("@")){emailError="Invalid email";
            }
            if(this.state.password.length > 8){
                passwordError="minlength 8";
            }
            if(emailError || nameError || passwordError){
            this.setState({emailError, nameError,passwordError});
            return false
            }
            return true;
            
        }
        handleSubmit = event => {
            event.preventDefault();
            const isValid=this.validate();
            if(isValid){
                console.log(this.state);
                this.setState(initialState);
            }
            
        }
        
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <div>
                <input 
                name="name"
                type="text"
                value={this.state.name} 
                onChange={this.handleChange}
                />
                <div style={{fontSize:10,color:"red"}}>
                    {this.state.nameError}
                </div>
                </div>

                <label>Email</label>
                <div>
                <input 
                name="email" 
                type="text" 
                placeholder="Enter your email" 
                value={this.state.email}
                onChange={this.handleChange}/>
                 <div style={{fontSize:10,color:"red"}}>
                    {this.state.emailError}
                </div>
                
                </div>
                <label>Password</label>
                <div>
                <input
                name="password"
                type="password"
                placeholder="Enter the password"
                value={this.state.password}
                onChange={this.handleChange}/>
                <div style={{fontSize:10,color:"red"}}>
                    {this.state.passwordError}
                </div>
                </div>
                <input type="submit" name=""  value="Sign up"/>
                <Redirect to="/" />
               
            </form>
        )
    }
}



