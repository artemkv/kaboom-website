import React from 'react';

class AppCode extends React.Component {
    constructor(props) {
        super(props);

        this.onToggleShowHide = this.onToggleShowHide.bind(this);

        this.state = {
            showFullAppCode: false
        };
    }

    onToggleShowHide() {
        this.setState({ showFullAppCode: true });
    }

    render() {
        let visibleAppCode = this.state.showFullAppCode ? this.props.appCode : this.props.appCode.substring(0, 20) + '...';
        return <div className="appcode" onClick={this.onToggleShowHide}>App Code: <span>{visibleAppCode}</span></div>;
    }
}

export default AppCode;