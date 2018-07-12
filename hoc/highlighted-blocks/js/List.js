'use strict';

const foo = (Wrap, Component, props) => <Wrap><Component {...props}/></Wrap>;

const getWrapper = (cb, [New, Popular]) => Component => class extends React.Component {
    constructor(prop) {
        super(prop);
    }

    static get displayName() {
        const name = Component.displayName || Component.name || 'Component';
        return `getWrapper(${name})`;
    }

    getData() {
        if (this.props.views < 100) {
            return cb(New, Component, this.props);
        } else if (this.props.views > 1000) {
            return cb(Popular, Component, this.props);
        } else {
            return <Component {...this.props}/>
        }
    }

    render() {
        return (
            this.getData()
        );
    }
};
const componentsWrap = [New, Popular];
const WrapperVideo = getWrapper(foo, componentsWrap)(Video);
const WrapperArticle = getWrapper(foo, componentsWrap)(Article);


const List = props => {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <WrapperVideo {...item} />
                );

            case 'article':
                return (
                    <WrapperArticle {...item} />
                );
        }
    });
};

