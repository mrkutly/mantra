import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../components/Logo"
import Intro from "../components/Intro"
import Menu from "../components/Menu"
import Contact from "../components/Contact"
import Press from "../components/Press"

const Index = () => (
	<Layout>
		<SEO />
		<main>
			<Logo />
			<Intro />
			<Menu />
		</main>
	</Layout>
)

export default Index
