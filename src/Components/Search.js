import React from 'react'

function Search(props) {
    return (
        <div className="col col-sm-4">
            <input className="form-control" value={props.value} onChange={(event)=> props.setSearchText(event.target.value)} placeholder="Search"></input>
        </div>
    )
}

export default Search
