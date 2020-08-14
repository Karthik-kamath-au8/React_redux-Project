import adi from "../Images/adi.jpg";
import adi1 from "../Images/adi1.jpg";
import nike from "../Images/nike.jpg";
import nike1 from "../Images/nike1.jpg";
import{ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUBTRACT_QUANTITY} from "../actions/actiontypes"


const initialState={
    items:[
        {id:1,title:"Adidas Running Shoes",price:1500,img:adi},
        {id:2,title:"Nike sports Shoes",price:1500,img:nike},
        {id:3,title:"Adidas casual Shoes",price:1500,img:adi1},
        {id:4,title:"Nike casual Shoes",price:1500,img:nike1},
    ],
    addedItems:[],
    total:0
}

const cartReducer=(state=initialState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
      
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total:addedItem + addedItem.price 
         }
      }
       else{
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total: newTotal
          }
          
      }
  }

  if(action.type === REMOVE_ITEM){
    let itemToRemove= state.addedItems.find(item=> action.id === item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
    console.log(itemToRemove)
    return{
        ...state,
        addedItems: new_items,
        total: newTotal
    }
}
if(action.type=== ADD_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      let newTotal = state.total + addedItem.price
      return{
          ...state,
          total: newTotal
      }
}
if(action.type=== SUBTRACT_QUANTITY){  
    let addedItem = state.items.find(item=> item.id === action.id) 
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return{
            ...state,
            total: newTotal
        }
    }
    
}
  else{
      return state
  }
}



export default cartReducer;


