
import React from 'react';

import * as session from '../../../../services/modules/session';


export default () => (
    <div>
        <h1>Login</h1>
        <button onClick={() => {
            session
                .authenticate()
                .then(console.log)
                .catch(console.log)
        }}>Auth</button>
    </div>
)