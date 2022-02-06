import React from 'react'

import SearchIcon from '@mui/icons-material/Search'

function HeaderSearch() {
    return (
        <div className="headerSearch">
            <input className="headerSearchInput" type="text" />
            <SearchIcon className="headerSearchButton" />
        </div>
    )
}

export default HeaderSearch
