import React, { Component } from 'react';
import {connect} from 'react-redux';

class last extends Component {
    render() {
        return (
            <div>
                <p>Total:{this.props.total}</p>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}
export default connect(mapStateToProps)(last)

