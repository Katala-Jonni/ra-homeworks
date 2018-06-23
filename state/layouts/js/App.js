'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: VIEW_MODULE,
            isCardView: true
        };
    }

    getSwitch(event) {
        return [VIEW_MODULE, VIEW_LIST].find(el => el !== event.target.textContent);
    }

    handle(event) {
        this.setState({
            switch: this.getSwitch(event),
            isCardView: !this.state.isCardView
        })
    }

    render() {
        return (
            <div>
                <div className="toolbar">
                    <IconSwitch
                        icon={this.state.switch}
                        onSwitch={() => this.handle(event)}/>
                </div>
                {this.renderLayout(this.state.isCardView)}
            </div>
        );
    }

    renderLayout(cardView) {
        if (cardView) {
            return (
                <CardsView
                    layout={this.props.layout}
                    cards={this.getShopItems(this.props.products, cardView)}/>
            );
        }
        return (<ListView items={this.getShopItems(this.props.products, cardView)}/>);
    }

    getShopItems(products, cardView) {
        return products.map(product => {
            let cardProps = {
                title: product.name,
                caption: product.color,
                img: product.img,
                price: `$${product.price}`
            };
            if (cardView) {
                return (
                    <ShopCard {...cardProps}/>
                );
            }
            return (<ShopItem {...cardProps}/>)
        });
    }
}
