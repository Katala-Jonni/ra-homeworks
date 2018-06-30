"use strict";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    onchangeHandle(evt) {
        this.props.filterBooks(evt.currentTarget.value);
    }

    render() {
        return (
            <input
                onChange={this.onchangeHandle.bind(this)}
                value={this.props.value}
                type="text"
                placeholder="Поиск по названию или автору"
            />
        )
    }
}