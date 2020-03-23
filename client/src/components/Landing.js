import React, { Component } from 'react'

class Landing extends Component{
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <div className="w3-card-4">
                    <header className="w3-container w3-red">
                        <h1>WELCOME TO BLOG APP</h1>
                    </header>
                    <div className="w3-container w3-purple">
                    <p style={{textAlign:"left"}}>this app you will be able to post your articles</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Landing