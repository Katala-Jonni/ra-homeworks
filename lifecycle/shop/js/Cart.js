class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate({isOpen, items}) {
        console.log(items.length);
        console.log(this.props.items.length);
        return isOpen !== this.props.isOpen || isOpen && this.props.length !== items.length;
    }

    render() {
        return (
            <CartView {...this.props} />
        );
    }

}
