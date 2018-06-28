'use strict';

const accordions = [
    {
        title: 'Компоненты',
        article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
    },
    {
        title: 'Выучил раз, используй везде!',
        article: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
    },
    {
        title: 'Использование JSX',
        article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
    }

];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.countLength = 6;
        this.data = new Array(this.countLength).fill(0);
    }

    getData() {
        return this.data.map((el, idx) => accordions[idx]);
    }

    render() {
        let data = this.getData();
        return (
            <main className="main">
                <Title> React </Title>

                {data.map((item, idx) => {
                    if (!item) return;
                    return (
                        <Accordion key={idx}>{item}</Accordion>
                    );
                })}
            </main>
        );
    }

}

const Title = (props) => {
    return (
        <h2 className="title">{props.children}</h2>
    );
};

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.props = [];
        this.state = {
            open: false
        }
    }

    render() {
        const toggleOpen = () => {
            this.setState({
                open: !this.state.open
            });
        };

        const SectionHead = (props) => {
            return (
                <h3 className="sectionhead" onClick={() => toggleOpen()}>{props.children}</h3>
            );
        };

        const ArticleWrap = (props) => {
            return (
                <div className="articlewrap">
                    <div className="article">
                        {props.children}
                    </div>
                </div>
            );
        };

        return (
            <section className={`section ${this.state.open ? "open" : ""}`}>
                <button onClick={() => toggleOpen()}>toggle</button>
                <SectionHead>{this.props.children.title}</SectionHead>
                <ArticleWrap>{this.props.children.article}</ArticleWrap>
            </section>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('accordian')
);