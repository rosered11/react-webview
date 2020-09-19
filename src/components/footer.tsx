/* eslint-disable @typescript-eslint/no-useless-constructor */
import React, { Component } from 'react';
import { IFooter } from "../modals/type.modal";
import '../App.css';

class Footer extends Component<IFooter> {
    constructor (props: Readonly<IFooter>) {
        super(props);
    }
    
    render() {
        const { mobileNo, email} = this.props
        return (
        <div className="App"> Mobile: {mobileNo}  |   Email: {email}</div>
        );
    }
}
export default Footer;