import React from 'react'

export default function Preview({code}) {
    return (
        <div dangerouslySetInnerHTML={{__html: code}} />
    )
}
