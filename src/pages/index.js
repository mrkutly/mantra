import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../components/Logo'
import Intro from '../components/Intro'
import Next from '../components/Next'

const Index = () => (
	<Layout isHomePage>
		<SEO title="Home" />
		<div
			style={{
				scrollSnapType: 'y mandatory',
				height: '100vh',
				overflow: 'scroll',
			}}
		>
			<Logo />
			<Intro />
			<Next />
		</div>
	</Layout>
)

export default Index
