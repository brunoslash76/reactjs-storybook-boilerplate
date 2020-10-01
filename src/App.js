import React from 'react'
import { AuthProvider } from 'b2b-front-components/dist/providers'
import ThemeProvider from './theme'
import Routes from './routes'

function App() {
    return (
        <ThemeProvider>
            <AuthProvider
                // TODO: Adicionar funções de login e logout
                service={{ login: () => null, logout: () => null }}
            >
                <Routes />
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
