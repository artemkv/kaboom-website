import React from 'react';
import * as api from '../api';
import * as dateTimeUtil from '../datetimeutil';

class CrashStats extends React.Component {
    constructor(props) {
        super(props);

        this.onPeriodChanged = this.onPeriodChanged.bind(this);

        this.state = {
            error: null,
            hasData: false,
            data: null,
            period: 'month'
        }
    }

    loadData(period) {
        api.getCrashStats(this.props.appCode, period, this.getDt(period))
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

    getDt(period) {
        let now = new Date();
        switch (period) {
            case 'year':
                return `${dateTimeUtil.getYear(now)}`;
            case 'month':
                return `${dateTimeUtil.getYear(now)}${dateTimeUtil.getMonth(now)}`;
            case 'day':
                return `${dateTimeUtil.getYear(now)}${dateTimeUtil.getMonth(now)}${dateTimeUtil.getDay(now)}`;
            case 'hour':
                return `${dateTimeUtil.getYear(now)}${dateTimeUtil.getMonth(now)}${dateTimeUtil.getDay(now)}${dateTimeUtil.getHour(now)}`;
            default:
                throw new Error(`Unknown period ${period}`);
        }
    }

    componentDidMount() {
        this.loadData(this.state.period);
    }

    onPeriodChanged() {
        this.setState({
            period: event.target.value,
            hasData: false,
            data: null,
            error: null
        });
        this.loadData(event.target.value);
    }

    render() {
        let period = this.state.period;
        let hasData = this.state.hasData;
        let data = this.state.data;
        return (
            <div className="panel-container">
                <div className="panel-outer">
                    <div className="panel-inner">
                        <div className="stats-title">Crash statistics for last</div>
                        <select className="period-picker" value={period} onChange={this.onPeriodChanged}>
                            <option value="year">Year</option>
                            <option value="month">Month</option>
                            <option value="day">Day</option>
                            <option value="hour">Hour</option>
                        </select>
                        <div>
                            {(hasData ?
                                <div className="details">
                                    <pre>{JSON.stringify(data)}</pre>
                                </div> :
                                <span className="loading">Loading...</span>)}
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default CrashStats;