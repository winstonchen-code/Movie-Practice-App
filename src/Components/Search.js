import React from 'react'

function Search(props) {
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" value={props.value} onChange={(event)=> props.setSearchText(event.target.value)} placeholder="Search"></input>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
