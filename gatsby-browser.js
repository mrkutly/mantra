/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './src/global.css'
import BackgroundVideo from './src/components/BackgroundVideo'

export const wrapPageElement = ({ element }) => (
	<>
		<BackgroundVideo />
		{element}
	</>
)
