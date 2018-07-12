'use strict';

const validateData = () => Component => class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static get displayName() {
        const name = Component.displayName || Component || 'Component';
        return `validateData(${name})`;
    }

    rounding(action, params) {
        return Math[action](params);
    }

    getLastTime() {
        const difference = +new Date() - +new Date(this.props.date);
        const minute = 60 * 1000;
        const hour = minute * 60;
        const day = hour * 24;

        if (this.rounding('floor', difference / day)) {
            return this.props.date = `${this.rounding('floor', difference / day)} дней назад`;
        }
        if (this.rounding('floor', difference / hour)) {
            return this.props.date = `${this.rounding('floor', difference / hour)} часов назад`;
        } else {
            return this.props.date = `${this.rounding('floor', difference / minute)} минут назад`;
        }
    }

    componentWillMount() {
        this.getLastTime();
    }

    render() {
        return <Component {...this.props}/>
    }
};

const DateTimePretty = validateData()(DateTime);

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date}/>
        </div>
    )
};