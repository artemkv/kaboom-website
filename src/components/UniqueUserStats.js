import React from 'react';
import StatsChart from './StatsChart'
import * as api from '../api';
import * as dateTimeUtil from '../datetimeutil';

class UniqueUserStats extends React.Component {
    constructor(props) {
        super(props);

        this.onPeriodChanged = this.onPeriodChanged.bind(this);

        this.state = {
            error: null,
            hasData: false,
            data: null,
            period: 'month',
            now: new Date()
        }
    }

    loadData(period, now) {
        api.getUniqueUserStats(this.props.appCode, period, dateTimeUtil.getDt(period, now))
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

    componentDidMount() {
        this.loadData(this.state.period, this.state.now);
    }

    onPeriodChanged() {
        let newNow = new Date();
        this.setState({
            period: event.target.value,
            hasData: false,
            data: null,
            error: null,
            now: newNow
        });
        this.loadData(event.target.value, newNow);
    }

    render() {
        let period = this.state.period;
        let dateTime = this.state.now;
        let hasData = this.state.hasData;
        let data = this.state.data;
        return (
            <div className="panel-container">
                <div className="panel-outer">
                    <div className="panel-inner">
                        <div className="stats-title">Unique users for last</div>
                        <select className="period-picker" value={period} onChange={this.onPeriodChanged}>
                            <option value="year">Year</option>
                            <option value="month">Month</option>
                            <option value="day">Day</option>
                        </select>
                        <div>
                            {(hasData ?
                                <div className="details">
                                    <StatsChart chartId="uniqueUserStats" period={period} dateTime={dateTime} data={data} />
                                </div> :
                                <span className="loading">Loading...</span>)}
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default UniqueUserStats;