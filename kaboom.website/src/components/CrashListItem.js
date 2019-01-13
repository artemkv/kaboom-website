import React from 'react';

// Example of data:
/*let data = {
    id: 427348768723,
    message: "NullReference...",
    count: 3
};*/

class CrashListItem extends React.Component {
    render() {
        return (
            <div className="panel-outer">
                <div className="panel-inner">
                    <div className="crash-message">{this.props.message}</div>
                    <div className="crash-counter">{this.props.count}</div>
                </div>
            </div>
        );
    }
}

export default CrashListItem;