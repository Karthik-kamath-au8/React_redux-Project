import React, {Component} from 'react';
import {connect} from 'react-redux';
import "./Images.css";
import {addToCart} from "../actions/cartaction"


class Home extends Component{
     handleClick =(id)=>{
          this.props.addToCart(id);
     }
     render(){
          let itemList=this.props.items.map(item=>{
               return(
                    <div className="container1">
                         <div className="card" key={item.id}>
                              <div className="card-image">
                              <img src={item.img}  alt={item.title}/>
                              </div>
                              <div>
                              <span className="card-title">{item.title}</span>
                              <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}
                              ><i className="material-icons">+</i></span>
                              <p><b>Price:{item.price}Rs</b></p>
                             
                              </div>
                         </div>
                    </div>
                    )
               })
     return(
          <div className="container">
              <h3 className="center">Shoes</h3>
              <div className="box">
                  {itemList}
              </div>
          </div>
      )
  }
}
const mapStateToProps = (state)=>{
     return {
       items: state.items
     }
   }
const mapDispatchToProps=(dispatch)=>{
     return{
          addToCart:(id)=>{dispatch(addToCart(id))}
     }
}   
 
 export default connect(mapStateToProps,mapDispatchToProps)(Home)
