import { memo } from 'react'
import Topbar from './topbar/Topbar'
import Menubar from './menubar/Menubar'

const Navbar = () => {
    console.log("%cNabar.js", 'background: darkgreen; color: white;')

    return (
        <div className="pb-5 fixed top-0 left-0 right-0 border-0 z-50 max-h-screen">
            <Menubar></Menubar>
            <Topbar></Topbar>
        </div>
    )
}

export default memo(Navbar)