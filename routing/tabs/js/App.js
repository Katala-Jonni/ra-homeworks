const navLinks = [
    {
        title: 'Рефераты',
        href: '/',
        component: Essay
    },
    {
        title: 'Криэйтор',
        href: '/creator',
        component: Creator
    },
    {
        title: 'Гадалка',
        href: '/fortune',
        component: Fortune
    },
];

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderNav() {
        return navLinks.map((item, idx) => <NavLink exact key={idx} to={item.href} activeClassName={'tabs__item-active'} className={'tabs__item'}>{item.title}</NavLink>)
    }

    renderRoute() {
        return navLinks.map((item) => <Route exact path={item.href} component={item.component}/>)
    }

    render() {
        return (
            <Router>
                <div className="tabs">
                    <nav className="tabs__items">
                        {this.renderNav()}
                    </nav>
                    <div className="tabs__content">
                        <Switch>
                            {this.renderRoute()}
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}