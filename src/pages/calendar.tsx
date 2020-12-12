import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Calendar from '../components/Calendar'

const CalendarPage = () => (
	<Layout>
		<SEO title="calendar" />
		<main>
			<Calendar />
		</main>
	</Layout>
)

export default CalendarPage
