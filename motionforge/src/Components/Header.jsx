import React from 'react'

function Header() {
    return (
        <header className="bg-orange-700 p-3 relative flex items-center align-middle justify-center">
            <div className="me-auto my-auto flex items-center">
                <i className="ph ph-hamburger px-3 text-2xl my-auto cursor-pointer"></i>
            </div>
            <div className="flex items-center px-3 justify-center text-center">
                <h1 className="font-light text-2xl text-center transition-all duration-500">MotionForge</h1>
            </div>
            <div className="ms-auto my-auto flex items-center">
                <i className="ph ph-hamburger px-3 text-2xl my-auto cursor-pointer"></i>
            </div>
        </header>
    )
}

export default Header