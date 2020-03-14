import React from 'react'

const Banner = ({children,title,subtitle}) => {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <h1></h1>
            <h1>{subtitle}</h1>
            {children}
        </div>
    )
}
export default Banner;