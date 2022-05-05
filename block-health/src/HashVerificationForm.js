import React from 'react';

export class HashVerificationForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hash: '',
            submitted: false
        }

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);     
    }

    handleChange(event) {
        this.setState({hash: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true })
    }

    renderVerificationSuccessful() {
        var _href = "https://ropsten.etherscan.io/tx/" + this.state.hash

        return (
            <div className='verification'>
                <div className='verificationWrapper'>
                    <h3>Verification Accepted!:</h3>
                    <p>Submitted Hash: {this.state.hash} </p>
                    <p>Follow the link below for transaction details:</p>
                    <a href={_href}>Transaction Details</a>
                </div>
            </div>
        )
    } 

    render() {
        return (
            <div className='hashverify'>
                <div className='wrapper'>
                    <h1>Enter Certificate Transaction Hash to Verify:</h1>
                    <form className='form' onSubmit={this.handleSubmit}>
                        <input className="hashinput" type="text" id="hash" name={this.state.hash} onChange={this.handleChange} />
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                    {this.state.submitted && this.renderVerificationSuccessful()}
                </div>
          </div>
        )
    }
}