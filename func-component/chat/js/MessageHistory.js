'use strict';

function MessageHistory({list}) {

    const elements = list.map(item => {
        return (
            item.type === 'message' && <Message from={item.from} message={item} key={item.id}/> ||
            item.type === 'response' && <Response from={item.from} message={item} key={item.id}/> ||
            item.type === 'typing' && <Typing from={item.from} message={item} key={item.id}/>
        );
    });
    return (
        <ul>
            {elements}
        </ul>
    );
}

MessageHistory.defaultProps = {
    list: []
};