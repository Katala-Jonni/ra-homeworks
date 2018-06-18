"use strict";

const Menu = function ({items, opened}) {

    const elements = items.map((elem, idx) => <li key={idx}><a href={elem.href}>{elem.title}</a></li>);

    if (opened) {
        return (
            <div className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                <nav>
                    <ul>
                        {elements}
                    </ul>
                </nav>
            </div>
        );
    } else {
        return (
            <div className="menu">
                <div className="menu-toggle"><span></span></div>
            </div>
        );
    }

};