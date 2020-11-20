import React from 'react'

export default function LoadingSpinner(props) {
    if (props.isLoading === true) {
        return (
            <div>
                hi
            </div>
        )
    } else {
        return null;
    }
}
