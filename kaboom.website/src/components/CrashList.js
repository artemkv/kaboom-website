import React from 'react';
import CrashListItem from './CrashListItem';

// TODO: retrieve this data from the server
let data = {
    crashes: [
        {
            id: 427348768723,
            message: "NullReference...",
            count: 3
        },
        {
            id: 398475983443,
            message: "IllegalArgument...",
            count: 134
        }
    ]
};

class CrashList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: data.crashes
        };
    }

    render() {
        return (
            <div className="panel-container">
                {
                    this.state.items.map(item => (
                        <CrashListItem key={item.id}
                            message={item.message}
                            count={item.count} />
                    ))
                }
            </div>
        );
    }
}

export default CrashList;