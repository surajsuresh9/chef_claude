// import { useState } from 'react'
// import './Header.css'

// const Header = ({ onToggleSidebar }) => {

//     const handleClick = () => {
//         onToggleSidebar(prev => !prev);
//     };
//     return (
//         <div className="header">
//             <img onClick={handleClick} src="../../img/hamburger.png" alt="hamburger_icon" />
//             <ul>
//                 <li>Home</li>
//                 <li>Contact</li>
//                 <li>About Us</li>
//                 <li>Products</li>
//             </ul>
//         </div>
//     )
// }

// export default Header

import './Header.css'
const Header = () => {
    return (
        <header>
            <img src='../../img/react-logo.png' alt='react-logo' />
            <h1>ReactFacts</h1>
        </header>
    )
}

export default Header