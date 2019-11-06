import React from 'react'

const MoreButton = (props) => {
    return <button onClick={(e)=> props.more(e)}>
            More sushi!
          </button>
}

export default MoreButton