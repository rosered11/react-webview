import React, { Component } from 'react';
import './fill-out-customer-info.css';
import '../App.css';
import axios from 'axios';

class FillOutCustomerInfo extends Component {

    componentDidMount() {
        axios.get('http://localhost:5000/product/'
        ).then((res) => {
            console.log('Product:  ',res, "<<<<<<<<<<<<<<>>>>>>>>>>>>>");
            
        });
    }
    
    render() {
        return (
            <div >
                <form >
                    <div className="inputForm">
                        <label>Input Form</label>
                    </div>
                    <div className="margin">
                        <p>First Name:</p>
                        <input type="text" placeholder=".......aaa" />

                        <p>Last Name:</p>
                        <input type="text" placeholder="......." />
                    </div>

                </form>
            </div>
        );
    }
}
export default FillOutCustomerInfo;