import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom'
import auth from '../../firebase.init'

const RequireAuth = ({ children }) => {
	const [user, loading, error] = useAuthState(auth)
	// function RequireAuth({ children }) {
	let location = useLocation()

	if (loading) {
		return (
			<div class='spinner-border' role='status'>
				<span class='visually-hidden'>Loading...</span>
			</div>
		)
	}
	if (!user) {
		console.log(user)
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return <Navigate to='/login' state={{ from: location }} replace />
	} else {
		return children
	}
}

export default RequireAuth
