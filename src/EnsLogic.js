import React, { useState } from 'react';
const ethers = require('ethers');
const provider = ethers.getDefaultProvider();



class EnsLogic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputvalue: "",
            search: ""
        }
    }
    handleChange = (event) => {
        this.setState({ inputvalue: event.target.value })
        
    }
    handleSubmit =(event) => {
           event.preventDefault();
           this.setState({ search: this.state.inputvalue })
        // console.log("clicked");  
        alert(this.state.search);

    }

    render() {

        return (
            <>
                <h1 >This is a simple ENS resolution.
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        required
                        type="text"
                        id="header-search"
                        placeholder="Input ENS name or an address"

                    />
                    <button >Search</button>
                </form>

            </>
        )
    };
}


export default EnsLogic;

