import React from 'react';

export function HashVerificationPage() {
    return (
        <div id='hashverify'>
            <div className='wrapper'>
                <h1>Enter Certificate Transaction Hash to Verify:</h1>
                <form className='form'>
                    <input className="hashinput" type="text" id="hash" name="hash"/>
                    <input className="submit" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}