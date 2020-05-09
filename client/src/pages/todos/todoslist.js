import React from 'react';

export function TodosList(props ) {
    const { data } = props || {};
    return (
        <div>
            {
                data && data.map((elm,index) => (
                <div key={elm.id}>{elm.text}<i className="fa fa-close" onClick={() => props.onDelete(elm.id)}></i></div>
                ))
            }
        </div>
    )
}