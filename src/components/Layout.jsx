import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<div>Layout</div>
			<button>click</button>
			<Outlet />
		</>
	)
}

export default Layout