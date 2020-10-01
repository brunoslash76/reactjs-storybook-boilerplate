import React from 'react'

// implement theme provider from styled components
const Theme = ({ children }) => (
	<ThemeProvider>{children}</ThemeProvider>
)

export default Theme
