import React from 'react';
import * as api from '../api';

class CrashListItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggleDetails = this.toggleDetails.bind(this);

        this.state = {
            showDetails: false,
            error: null,
            hasData: false,
            data: null
        }
    }

    toggleDetails(e) {
        e.preventDefault();

        // If toggling details on
        if (this.state.showDetails == false) {
            if (!this.state.crash) {
                api.getCrashDetails(this.props.appCode, this.props.id)
                    .then((data) => {
                        data.details = atob(data.details);

                        this.setState({
                            hasData: true,
                            data,
                            error: null
                        });
                    })
                    .catch(error => {
                        this.setState({
                            hasData: false,
                            data: null,
                            error
                        });
                    });
            }
        }

        this.setState(state => {
            return { showDetails: !state.showDetails };
        });
    }

    render() {
        let showDetails = this.state.showDetails;
        let hasData = this.state.hasData;
        let data = this.state.data;
        return (
            <div className="panel-outer">
                <div className="panel-inner">
                    <div className="crash-message">{this.props.message}</div>
                    <div className="crash-counter">x {this.props.count}</div>
                    <div className="expander">
                        <a href="#" onClick={this.toggleDetails}>{showDetails ? "Hide details" : "Show details"}</a>
                    </div>
                    {showDetails &&
                        (hasData ?
                            <div className="details">
                                <pre>{data.details}</pre>
                            </div> :
                            <span className="loading">Loading...</span>)
                    }
                </div>
            </div >
        );
    }
}

export default CrashListItem;