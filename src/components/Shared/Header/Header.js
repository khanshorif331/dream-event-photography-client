import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					Dream Event Photography
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						{/* <Nav.Link href='#features'></Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link> */}
					</Nav>
					<Nav>
						<Nav.Link as={Link} to='/home'>
							Home
						</Nav.Link>
						<Nav.Link as={Link} to='/login'>
							Login
						</Nav.Link>
						<Nav.Link as={Link} to='/blogs'>
							Blogs
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
