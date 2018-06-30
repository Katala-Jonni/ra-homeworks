"use strict";

class SubscribeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validClass: null
        };
        this.valid = 'is-valid';
        this.error = 'is-error';
    }

    isValid(elem) {
        return elem.value !== '' ? (elem.validity.valid ? this.valid : this.error) : false;
    }

    onChangeHandle(evt) {
        this.setState({
            validClass: this.isValid(evt.currentTarget)
        });
    }

    render() {
        return (
            <div className="subscribe__form">
                <form className={`form form--subscribe ${this.state.validClass}`}>
                    <h4 className="form-title">Подписаться:</h4>
                    <FormField
                        onChange={this.onChangeHandle.bind(this)}
                    />
                </form>
            </div>
        )
    }
}

class FormField extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="input-email" className="sr-only">Email</label>
                <input
                    type="email"
                    id="input-email"
                    placeholder="Email"
                    className="form-control"
                    onChange={this.props.onChange}
                />
                <div className="form-error">Пожалуйста, проверьте корректность адреса электронной почты</div>
                <button type="submit" className="form-next">
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
            </div>
        );
    }
}