import React, { Component } from 'react';
import './home.css';


export default class SignUp extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        name:"",
        email:"",
        phoneno:"",
        uType:"Customer",
        pincode:"",
        address:"",
        password:"",
        confrimPass:"",
      };
  
    }
    finalSubmit(){
        if(this.state.password!==this.state.confrimPass){
            alert("Password are mismatch...");
            return;
        }
        
        
        // axios({ 
        //     method: 'post',
        //     url: 'http://localhost:3001/api/createnewfarm',
        //     headers: { 
        //         'Content-Type' : 'application/json' 
        //     },
        //     data:data
        //   }).then(res => {
        //       console.log(res);
        //       alert("Successfully registered...");
        //       this.props.fetchData(true);
        // });
    }

    

    check(){
        if(this.state.password===""){
            return false;
        }
        else if(this.state.confrimPass===""){
            return false;
        }
        else if(this.state.password===this.state.confrimPass){
            return true;
        }
    }
    render(){
        return( 
            <div className='mainDiv1'>
                <div className='inDiv1'>
                <div style={{color:"pink"}}><h1><b>SIGN UP</b></h1><span> to adds you in agrow world</span></div>
                    <div className='username'>
                        <label>Name <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} required={true} value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Email <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
                    </div>                   
                    <div className='username'>
                        <label>Phone No <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.phoneno} onChange={(e)=>this.setState({phoneno:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>User Type </label><br></br>
                        <select style={{width:"100%"}} value={this.state.uType} onChange={(e)=>this.setState({uType:e.target.value})}>
                            <option>Customer</option>
                            <option>Farmer</option>
                        </select>
                    </div>
                    <div className='username'>
                        <label>Address <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Pincode <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.pincode} onChange={(e)=>this.setState({pincode:e.target.value})}/>
                    </div>                   
                    <div className='username'>
                        <label>Password <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})}/>
                    </div>
                    <div className='username'>
                        <label>Confrim Password <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.confrimPass} onChange={(e)=>this.setState({confrimPass:e.target.value})}/>
                    </div>
                    <button className={this.check() ? 'next':'nextDis'} 
                            disabled={!this.check()}
                            style={{cursor:this.check() ? "pointer":"none"}}
                            onClick={()=>this.finalSubmit()}>Register
                    </button>                   
                    
                </div>                
            </div>
        );
    }

}