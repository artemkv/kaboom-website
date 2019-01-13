import React from 'react';
import CrashListItem from './CrashListItem';
import Spinner from './Spinner';
import * as api from '../api';

class CrashList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            hasData: false,
            data: []
        };
    }

    componentDidMount() {
        api.getCrashes(this.props.appCode)
            .then((data) => {
                this.setState({
                    hasData: true,
                    data,
                    error: null
                });
            })
            .catch(error => {
                this.setState({
                    hasData: false,
                    data: [],
                    error
                });
            });
    }

    render() {
        return (
            <div className="panel-container">
                {
                    this.state.hasData ?
                        this.state.data.map(item => (
                            <CrashListItem key={item.id}
                                message={item.message}
                                count={item.count} />
                        )) :
                        <Spinner />
                }
            </div>
        );
    }
}

export default CrashList;