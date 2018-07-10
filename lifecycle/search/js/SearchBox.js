class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.elementY = document.querySelector('.container input').getBoundingClientRect().top;
    }

    shouldComponentUpdate() {
        return this.state.fixed;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return <SearchBoxView fixed={this.state.fixed}/>
    }

    isFixed() {
        return window.pageYOffset > this.elementY;
    }

    setPosition() {
        this.setState({
            fixed: this.isFixed()
        });
    }

    handleScroll() {
        this.setPosition();
    }
}
