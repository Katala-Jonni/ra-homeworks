class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        };
        this.handleResize = this.handleResize.bind(this);
    }

    shouldComponentUpdate({completed, total}) {
        const comp = completed === this.props.completed;
        const tot = total === this.props.total;
        return !(comp && tot);
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext('2d');
        this.showProgress(this.props);
        window.addEventListener('resize', this.handleResize)
    }

    componentWillReceiveProps(nextProps) {
        this.showProgress(nextProps);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    showProgress(data) {
        const {completed, total} = data;
        const percent = Math.round((completed * 100) / total);
        const arc = Math.PI * 2;
        const pieceOfTheCircle = (arc * completed) / total;
        this.showCanvas(percent, pieceOfTheCircle);
    }

    showCanvas(percent, pieceOfTheCircle) {
        const canvas = this.canvas;
        canvas.width = this.state.width || canvas.offsetWidth;
        canvas.height = this.state.height || canvas.offsetHeight;
        const width = canvas.width / 2;
        const height = canvas.height / 2;
        const ctx = this.ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 7;
        this.outRadius = 52 - ctx.lineWidth;
        this.innerRadius = 45 - ctx.lineWidth;
        ctx.font = "normal normal 21px Tahoma";
        ctx.fillText(`${percent}%`, width - 28, height);
        ctx.strokeStyle = '#4ca89a';
        ctx.beginPath();
        ctx.arc(width, height, this.outRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.beginPath();
        ctx.strokeStyle = '#96d6f4';
        ctx.arc(width, height, this.innerRadius, 0, pieceOfTheCircle);
        ctx.stroke();
    }

    handleResize() {
        this.setState({
            width: this.canvas.width = this.canvas.offsetWidth,
            height: this.canvas.height = this.canvas.offsetHeight
        });
        this.showProgress(this.props);
    }

    render() {
        return (
            <canvas id="progressCanvas" className="progress" ref={canvas => this.canvas = canvas}/>
        );
    }
}
