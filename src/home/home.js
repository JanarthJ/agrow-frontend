import React, { Component } from 'react';
import './home.css';
import SignUp from './signup';

export default class Home extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        uName:"",
        uPass:"",
        uType:"Customer",
        signUp:false,
        userDetail:{},
        auth:false
      };
      this.getter = this.getter.bind(this);
    }
    getter(val){
          this.setState({signUp:false});        
    }
    submit(){
        // let data={
        //     password:this.state.uPass,
        //     email:this.state.uName
        // }
        // axios({ 
        //     method: 'post',
        //     url: 'http://localhost:3001/api/auth',
        //     headers: { 
        //         'Content-Type' : 'application/json' 
        //     },
        //     data:data
        //   }).then(res => {
        //       console.log(res);
        //       if(res.data === "User not found please Sign in" || res.data==="Invalid Credentials"){
        //             alert(res.data);
        //             return;
        //     }else{
        //         this.setState({userDetail:res.data});
        //         this.setState({auth:true,signUp:false},()=>console.log(this.state.auth));
        //         alert("Successfully Authenticated...");
                
        //     }
            
        // });
    }
    signUp(){
        this.setState({signUp:true});
    }
    render(){
        return( 
            <div className='mainDiv'>
                {this.state.signUp ? (
                    <SignUp fetchData={this.getter}/>
                    // <div></div>
                )
                :
                (
                <div className='inDiv'>
                    <div style={{color:"pink"}}><h1><b>SIGN IN</b></h1><span> to step forward into agrow world</span></div>
                    <div className='username'>
                        <label>Username </label><br></br>
                        <input type={'text'}  style={{width:"95%"}} value={this.state.uName} onChange={(e)=>this.setState({uName:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>User Type </label><br></br>
                        <select style={{width:"98%"}} value={this.state.uType} onChange={(e)=>this.setState({uType:e.target.value})}>
                            <option>Customer</option>
                            <option>Farmer</option>
                        </select>

                    </div>
                    <div className='username'>
                        <label>Password </label><br></br>
                        <input type={'password'}  style={{width:"95%"}} value={this.state.uPass} onChange={(e)=>this.setState({uPass:e.target.value})}/>
                    </div>
                    <button className='next' onClick={()=>this.submit()}>Sign In</button>
                    <div className='signup'>
                        <p>Don't have an account ? <span> </span> 
                        <u style={{color:"pink",cursor:"pointer"}}
                        onClick={()=>this.signUp()}>Sign Up</u>
                        </p></div>
                </div>)}
            </div>
        );
    }

}