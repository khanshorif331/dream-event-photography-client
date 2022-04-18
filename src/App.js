import './App.css'
import Home from './components/Home/Home/Home'
import Header from './components/Shared/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import NotFound from './components/Shared/NotFound/NotFound'
import Checkout from './components/Checkout/Checkout'
import Signup from './components/Signup/Signup'
import Footer from './components/Shared/Footer/Footer'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/signup' element={<Signup></Signup>}></Route>
				<Route
					path='/checkout'
					element={
						<RequireAuth>
							<Checkout></Checkout>
						</RequireAuth>
					}
				></Route>
				<Route path='/blogs' element={<Blogs></Blogs>}></Route>
				<Route path='/about' element={<About></About>}></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App
