import React from 'react';
import SignInButton from './SignInButton';
import SignOutButton from './SignOutButton';

export default () => <div className="client-area-outer">
    <div className="client-area-inner">
        <div><h1>Hello World</h1><SignInButton /><SignOutButton /></div>
    </div>
</div>