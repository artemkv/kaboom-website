import React from 'react';

// Example of data:
/*let data = {
    id: 427348768723,
    message: "NullReference...",
    counter: 3
};*/

class CrashListItem extends React.Component {
    render() {
        return (
            <div className="panel-outer">
                <div className="panel-inner">
                    <div className="crash-message">{this.props.message}</div>
                    <div className="crash-counter">{this.props.counter}</div>
                </div>
            </div>
        );
    }
}

export default CrashListItem;