import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    console.log("%cRequireAuth.js", 'background: darkred; color: white;')
    const { currentUser } = useAuth()
    const location = useLocation();

    if (!currentUser) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return children;
}

export default RequireAuth