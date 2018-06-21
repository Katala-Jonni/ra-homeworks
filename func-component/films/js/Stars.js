'use strict';

const isValidCount = count => (count < 1 || count > 5 || typeof count !== 'number');
const isFunction = element => typeof element === 'function';
const getRenderIf = count => element =>
    isValidCount(count) ? null : (isFunction(element) ? element() : element);

function GetStars(count) {
    let stars = [];
    for (let i = count; i > 0; i--) {
        stars.push(<Star/>);
    }
    return stars.map((el, idx) => <li key={idx}>{el}</li>);
}

function Stars({count}) {

    return <ul className="card-body-stars u-clearfix">
        {getRenderIf(count)(
            GetStars(count)
        )}
    </ul>
}

Stars.defaultProps = {
    count: 0
};
