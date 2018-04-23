import React from 'react';

export default class Filter extends React.Component {

    onHandleChange(event) {
        this.props.filterAlbums(event.target.value)
    }

    render() {

        return(
            <div className="album-section__filter-container">
                <input type="text" value={this.props.filterValue} placeholder="filter" onChange={this.onHandleChange.bind(this)} />
            </div>
        )
    }
}