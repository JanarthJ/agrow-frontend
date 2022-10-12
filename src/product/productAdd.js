import React, { Component } from 'react';
import './add.css';


export default class AddProduct extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        pdname:"",
        pdqty:"",
        pdprice:"",
        pdarea:"",
        pddesc:"",
        pdimage:"https://ibb.co/rG49Vwd"
      };
  
    }
    finalSubmit(){
       console.log(this.state);
    }

    

    check(){
        // if(this.state.password===""){
        //     return false;
        // }
        // else if(this.state.confrimPass===""){
        //     return false;
        // }
        // else if(this.state.password===this.state.confrimPass){
        //     return true;
        // }
    }
    setImage(val){
        this.setState({pdimage:val},()=>console.log(this.state));

    }
    render(){
        return( 
            <div className='mainDiv'>
                <div className='inDiv1'>
                <div style={{color:"pink"}}><h1><b>Add YOUR PRODUCT</b></h1><span> to sell in agrow world</span></div>
                    <div className='productname'>
                        <label>Name of Product<b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} required={true} value={this.state.pdname} onChange={(e)=>this.setState({pdname:e.target.value})}/>
                    </div>
                    <div className='productname'>
                        <label>Available Quantity<b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.pdqty} onChange={(e)=>this.setState({pdqty:e.target.value})}/>
                    </div>  
                    <div className='productname'>
                        <label>Product Price<b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.pdprice} onChange={(e)=>this.setState({pdprice:e.target.value})}/>
                    </div>                   
                    <div className='productname'>
                        <label>Area of Growth<b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.pdarea} onChange={(e)=>this.setState({pdarea:e.target.value})}/>
                    </div>
                    <div className='productname'>
                        <label>Product Image</label><br></br>
                        <select style={{width:"100%"}} value={this.state.pdimage}  onChange={(e)=>this.setImage(e.target.value)} >
                            <option value="https://ibb.co/rG49Vwd">Tamato</option>
                            <option value="https://ibb.co/c3M2Q8D">Potato</option>
                            <option value="https://ibb.co/X8pTg7G">Onion</option>
                        </select>
                    </div>
                    <div className='productname'>
                        <label>Product Description <b style={{color:"red"}}>*</b></label><br></br>
                        <input type={'text'} value={this.state.pddesc} onChange={(e)=>this.setState({pddesc:e.target.value})}/>
                    </div>
                    
                    <button className={this.check() ? 'nextDis':'nextDis'} 
                            disabled={false}
                            style={{cursor:this.check() ? "pointer":"Pointer"}}
                            onClick={()=>this.finalSubmit()}>ADD
                    </button>                   
                    
                </div>                
            </div>
        );
    }

}