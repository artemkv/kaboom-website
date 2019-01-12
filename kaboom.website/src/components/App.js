import React from 'react';
import LoginControl from './LoginControl';
import CrashList from './CrashList';

export default () => (
    <div className="client-area-outer">
        <div className="client-area-inner">
            <LoginControl />
            <CrashList />
        </div>
    </div>
)