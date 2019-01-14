import React from 'react';

class Chart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <pre>{JSON.stringify(this.props.data)}</pre>
        );
    }
}

export default Chart;