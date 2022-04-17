import { Button } from 'bootstrap'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'

const Header = () => {
	const [user, loading, error] = useAuthState(auth)
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					Dream Event Photography
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'></Nav>
					<Nav>
						<Nav.Link as={Link} to='/home'>
							Home
						</Nav.Link>

						<Nav.Link as={Link} to='/checkout'>
							Checkout
						</Nav.Link>
						<Nav.Link as={Link} to='/blogs'>
							Blogs
						</Nav.Link>
						<Nav.Link as={Link} to='/login'>
							Login
						</Nav.Link>
						<Nav.Link eventKey={2} as={Link} to='/about'>
							About Me
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
