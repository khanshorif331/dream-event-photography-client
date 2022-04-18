import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import {
	useCreateUserWithEmailAndPassword,
	useSendEmailVerification,
} from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import auth from '../../firebase.init'
import Social from '../Shared/Social/Social'

const Signup = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPass, setConfirmPass] = useState('')

	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

	const [sendEmailVerification, sending, verificationError] =
		useSendEmailVerification(auth)

	const handleEmail = event => {
		setEmail(event.target.value)
		console.log(email)
	}
	const handlePassword = event => {
		setPassword(event.target.value)
		console.log(password)
	}
	const handleConfirmPass = event => {
		setConfirmPass(event.target.value)
		console.log(confirmPass)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		createUserWithEmailAndPassword(email, password)
		// await sendEmailVerification()
		// return <ToastContainer></ToastContainer>
		// toast.success('Success Notification !', {
		// 	position: toast.POSITION.TOP_CENTER,
		// })
	}

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'

	// if (error) {
	// 	return (
	// 		<div>
	// 			<p>Error: {error.message}</p>
	// 		</div>
	// 	)
	// }
	if (loading) {
		return (
			<Spinner className='my-auto' animation='border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		)
	}

	if (user) {
		navigate(from)
	}

	return (
		<div class='p-4 mx-auto mt-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
			<form onSubmit={handleSubmit} class='space-y-6'>
				<h5 class='text-xl font-medium text-gray-900 dark:text-white'>
					Sign Up Here
				</h5>
				<div>
					<label
						for='name'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Your Name
					</label>
					<input
						type='text'
						name='text'
						id='text'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
						placeholder='Your Name'
						required
					/>
				</div>
				<div>
					<label
						for='email'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Your email
					</label>
					<input
						onChange={handleEmail}
						type='email'
						name='email'
						id='email'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
						placeholder='name@company.com'
						required
					/>
				</div>
				<div>
					<label
						for='password'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Your password
					</label>
					<input
						onChange={handlePassword}
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
						required
					/>
				</div>
				<div>
					<label
						for='confirm-password'
						class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Confirm Password
					</label>
					<input
						onChange={handleConfirmPass}
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
						required
					/>
				</div>
				<div class='flex items-start'>
					<div class='flex items-start'>
						<div class='flex items-center h-5'>
							<input
								id='remember'
								aria-describedby='remember'
								type='checkbox'
								class='w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
								required
							/>
						</div>
						<div class='ml-3 text-sm'>
							<label
								for='remember'
								class='font-medium text-gray-900 dark:text-gray-300'
							>
								Accept
								<strong> Dream Events Terms & Conditions</strong>
							</label>
						</div>
					</div>
				</div>
				{error ? <p className='text-danger'>{error?.message}</p> : ''}
				<button
					type='submit'
					class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Sign up your Account
				</button>
				<div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
					Already Have an Account?{' '}
					<Link
						to='/login'
						class='text-blue-700 hover:underline dark:text-blue-500'
					>
						Login
					</Link>
				</div>
			</form>
			<Social></Social>
		</div>
	)
}

export default Signup
