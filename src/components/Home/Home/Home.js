import React, { useState } from 'react'
import './Home.css'
import img1 from '../../../images/image1.jpeg'
import img2 from '../../../images/image2.jpg'
import img3 from '../../../images/image3.jpg'
import Services from '../Services/Services'
import Feedback from '../Feedback/Feedback'
const Home = () => {
	return (
		<div>
			<img src={img2} className='img-fluid mx-auto' alt='' />
			<Services></Services>
			<Feedback></Feedback>
		</div>
	)
}

export default Home
