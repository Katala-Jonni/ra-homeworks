'use strict';

const AuthForm = props => {

    function handle(event) {
        event.preventDefault();
        if (!props.onAuth && typeof props.onAuth !== 'function') {
            return null;
        }
        const userAuth = {};
        const elements = event.currentTarget.querySelectorAll('input');
        Array.from(elements).forEach(el => {
            userAuth[el.name] = el.value
        });
        props.onAuth(userAuth);
    }

    function getRegexp(event) {
        const element = event.target;
        if (element.name === 'email') {
            element.value = element.value.replace(/[^A-Za-z0-9_@\-/\.]/g, '');
        }
        if (element.name === 'password') {
            element.value = element.value.replace(/\W/g, '');
        }
    }

    return (
        <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={handle} onChange={getRegexp}>
            <div className="Input">
                <input required type="text" name='name' placeholder="Имя"/>
                <label></label>
            </div>
            <div className="Input">
                <input type="email" name='email' placeholder="Электронная почта"/>
                <label></label>
            </div>
            <div className="Input">
                <input required type="password" name='password' placeholder="Пароль"/>
                <label></label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"></i>
            </button>
        </form>
    );
};