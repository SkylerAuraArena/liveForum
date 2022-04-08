import { memo, useState } from "react"
import MenubarHiddenDisplay from "./MenubarHiddenDisplay"

const Menubar = () => {
    console.log("%cNavbar -- Menubar", 'background: green; color: white;')
    const [hiddenMenuOpened, setHiddenMenuOpened] = useState(false)

    return (
        <div className="py-2 bg-whiteColorBg">
            <MenubarHiddenDisplay setHiddenMenuOpened={setHiddenMenuOpened} />
        </div>
    )
}

export default memo(Menubar)