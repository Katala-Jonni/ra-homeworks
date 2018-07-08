"use strict";

const navLinks = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Дрифт-такси',
        href: '/drift'
    },
    {
        title: 'Time Attack',
        href: '/timeattack'
    },
    {
        title: 'Forza Karting',
        href: '/forza'
    },
];

const Menu = (props) => {
    return (
        <nav className="menu">
            {navLinks.map((item, idx) =>
                <NavLink exact key={idx} to={item.href} activeClassName={props.active} className={props.style}>{item.title}</NavLink>)}
        </nav>
    );
};