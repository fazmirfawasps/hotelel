import React, { createContext, useState } from 'react'
export const ExternalContext = createContext()

function CustomContext({ children }) {
    const [open, setOpen] = useState(false) //to open and close modal
    const [openLogin, setOpenlogin] = useState(false) //to open the modal onclick login button
    const [alert, setAlert] = useState({ notify: false, message: '' }) // for alerting the user

    return (
        <ExternalContext.Provider
            value={{
                open,
                setOpen,
                alert,
                setAlert,
                openLogin,
                setOpenlogin,
            }}
        >
            {children}
        </ExternalContext.Provider>
    )
}

export default CustomContext
