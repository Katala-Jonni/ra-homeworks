'use strict';

function FeedbackForm(props) {
    const data = props.data;

    const handle = event => {
        event.preventDefault();
        const newData = {};
        const form = event.currentTarget.elements;
        Object.keys(data).forEach(el => {
            newData[el] = (el === 'snacks') ?
                Array.from(form[el]).filter(el => el.checked).map(el => el.value)
                : form[el].value;
        });
        props.onSubmit(JSON.stringify(newData));
    };

    return (
        <form className="content__form contact-form" onSubmit={handle}>
            <div className="testing">
                <p>Чем мы можем помочь?</p>
            </div>
            <div className="contact-form__input-group">
                <input
                    defaultChecked={data.salutation === 'Мистер'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-mr"
                    name="salutation"
                    type="radio"
                    value="Мистер"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
                <input
                    defaultChecked={data.salutation === 'Мисис'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-mrs"
                    name="salutation"
                    type="radio"
                    value="Миссис"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
                <input
                    defaultChecked={data.salutation === 'Мис'}
                    className="contact-form__input contact-form__input--radio"
                    id="salutation-ms"
                    name="salutation"
                    type="radio"
                    value="Мисс"
                />
                <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="name">Имя</label>
                <input
                    className="contact-form__input contact-form__input--text"
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={data.name}
                />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
                <input
                    className="contact-form__input contact-form__input--email"
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={data.email}
                />
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
                <select defaultValue={data.subject} className="contact-form__input contact-form__input--select"
                        id="subject" name="subject">
                    <option>У меня проблема</option>
                    <option>У меня важный вопрос</option>
                </select>
            </div>
            <div className="contact-form__input-group">
                <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
                <textarea
                    defaultValue={data.message}
                    className="contact-form__input contact-form__input--textarea"
                    id="message"
                    name="message"
                    rows="6"
                    cols="65">
                </textarea>
            </div>
            <div className="contact-form__input-group">
                <p className="contact-form__label--checkbox-group">Хочу получить:</p>
                <input
                    className="contact-form__input contact-form__input--checkbox"
                    id="snacks-pizza"
                    name="snacks"
                    type="checkbox"
                    value="пицца"
                    defaultChecked={data.snacks.includes('пицца')}
                />
                <label className="contact-form__label contact-form__label--checkbox"
                       htmlFor="snacks-pizza">Пиццу</label>
                <input
                    className="contact-form__input contact-form__input--checkbox"
                    id="snacks-cake"
                    name="snacks"
                    type="checkbox"
                    value="пирог"
                    defaultChecked={data.snacks.includes('пирог')}
                />
                <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
            </div>
            <button className="contact-form__button" type="submit">Отправить сообщение!</button>
            <output id="result"/>
        </form>
    );
}