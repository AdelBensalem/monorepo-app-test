
import React from 'react';

import Login from './scenes/Login';
import Register from './scenes/Register';


export default class extends React.Component {

    state = {
        mode: 'login',
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.setState(() => ({ mode: 'login' }))}>Login</button>
                    <button onClick={() => this.setState(() => ({ mode: 'register' }))}>Register</button>
                </div>
                <div>
                    {
                        this.state.mode === 'login' ?
                            <Login/> :
                            <Register/>
                    }
                </div>
            </div>
        );
    }
}