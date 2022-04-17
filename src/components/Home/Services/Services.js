import React from 'react'
import useServices from '../../../hooks/useServices'
import Service from '../Service/Service'

const Services = () => {
	const [services, setServices] = useServices()
	return (
		<div>
			<h1>My Services and Packages</h1>
			<div class='row row-cols-1 row-cols-md-3 g-5 mx-auto'>
				{services.map(service => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</div>
	)
}

export default Services
