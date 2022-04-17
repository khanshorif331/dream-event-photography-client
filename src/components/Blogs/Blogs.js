import React from 'react'

const Blogs = () => {
	return (
		<div class='accordion w-3/4 mx-auto' id='accordionPanelsStayOpenExample'>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='panelsStayOpen-headingOne'>
					<button
						class='accordion-button'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#panelsStayOpen-collapseOne'
						aria-expanded='true'
						aria-controls='panelsStayOpen-collapseOne'
					>
						What is the Differnce Between Authorization and
						Authentication???
					</button>
				</h2>
				<div
					id='panelsStayOpen-collapseOne'
					class='accordion-collapse collapse show'
					aria-labelledby='panelsStayOpen-headingOne'
				>
					<div class='accordion-body'>
						<strong>Authentication</strong> is the process by which we can
						verify someone in our website.We can verify who is the person
						and take his information.
						<strong>Aothorization</strong> is the this by which we can
						give the power after authentication.It means after verifying
						someone we can give him the authorization.
					</div>
				</div>
			</div>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
					<button
						class='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#panelsStayOpen-collapseTwo'
						aria-expanded='false'
						aria-controls='panelsStayOpen-collapseTwo'
					>
						Why are you using firebase??What are other options do you have
						to implement authentication??
					</button>
				</h2>
				<div
					id='panelsStayOpen-collapseTwo'
					class='accordion-collapse collapse'
					aria-labelledby='panelsStayOpen-headingTwo'
				>
					<div class='accordion-body'>
						<strong>Firebase</strong> helps us to to build and run
						successful apps.Firebase manages all data real-time in the
						database.So the exchange of data from the database is easy.We
						can use this for authentication also. <br />
						There are lot of alternatives of firebase available.Such as:
						Parse,Back4App,AWS amplify,Kuzzle,Couchbase etc.
					</div>
				</div>
			</div>
			<div class='accordion-item'>
				<h2 class='accordion-header' id='panelsStayOpen-headingThree'>
					<button
						class='accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#panelsStayOpen-collapseThree'
						aria-expanded='false'
						aria-controls='panelsStayOpen-collapseThree'
					>
						What other services does firebase provide other than
						authentication???
					</button>
				</h2>
				<div
					id='panelsStayOpen-collapseThree'
					class='accordion-collapse collapse'
					aria-labelledby='panelsStayOpen-headingThree'
				>
					<div class='accordion-body'>
						Firebase, Backend-as-a-Service (BaaS), is a platform by Google
						that provides functionalities and helps with the backend
						development of your Android, iOS, or web .Firebase provides
						tools for tracking analytics,reporting and fixing apps
						crashes, creating marketing and product experiment.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs
