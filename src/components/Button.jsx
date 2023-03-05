import React from 'react'

const Button = ({ children, style }) => {
    return (

        <button className={`${style} w-full h-14 rounded-xl text-xl font-bold mb-3`} > {children}</button>

    )
}

export default Button
