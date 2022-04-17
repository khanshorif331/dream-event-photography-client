import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Service = ({ service }) => {
	const { category, price, picture, about } = service
	// console.log(service)
	return (
		<div class='col'>
			<div class='card h-100 rounded'>
				<img src={picture} class='card-img-top' alt='...' />
				<div class='card-body'>
					<h1 class='card-title'>{category}</h1>
					<h1>{price}</h1>
					<p class='card-text'>{about}</p>
				</div>
				<div class='card'>
					<Link to='/checkout'>
						<button type='button' class='btn btn-outline-dark w-100'>
							Order Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Service
