import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Product from './component/Product'

class App extends Component {
    showInfo(student){
        if (student.age >23) {
            return <div>
                    <h1>{student.name}</h1>
                </div>
        }
    }
  render() {
        var phones = [
        {
            name : "Iphone X",
            price : "29000000",
            image : "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
            status : true
        },
        {
            name : "Iphone 8",
            price : "19000000",
            image : "https://www.att.com/catalog/en/skus/Apple/Apple%20iPhone%208/overview/326475-PDP-S1-1.png",
            status : true
        }
        ];

        var elements = phones.map((phone, index) => {
            return <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={index}>
                        <Product
                            key={index} 
                            name={phone.name}
                            price={phone.price}
                            image={phone.image}
                        />
                    </div>
        });
    return (
      <div className="App">
        <div>
            <Header />
        </div>
        {elements}
        <br/>
      </div>
    );
  }
}

export default App;
