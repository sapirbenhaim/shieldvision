import React from 'react'
import './SignOutButton.css'
import { removeTokenAndLogOut } from '../../../managers/authManager'

/**
 * Represents a button component for signing out.
 */
const SignOutButton = () => {

    /**
     * Handles the sign-out action.
     */
    const handleSignOut = () => {
        removeTokenAndLogOut();
    }

    return (
        <button id='signOutButton' onClick={() => handleSignOut()}>Sign Out</button>
    )
}

export default SignOutButton
