import React, { Component } from 'react';

class Product extends Component {
    constructor(props){
        super(props);
        this.showInfo = this.showInfo.bind(this);
    }

    showInfo(){
        console.log(this.props.name);
    }
  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="thumbnail">
                <img src={this.props.image} alt={this.props.name}/>
                <div className="caption">
                    <h3>{this.props.name}</h3>
                    <h3>{this.props.price}</h3>
                </div>
            </div>
            <button type="button" className="btn btn-default" onClick={this.showInfo}>
                Mua hàng
            </button>
        </div>
      </div>
    );
  }
}


export default Product;
