import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import LoadingPage from '../pages/Loading'
import AuthRoutes from './AuthRoutes'
import PublicRoutes from './PublicRoutes'



const Routes = () => {
    // eslint-disable-next-line no-unused-vars

    return (
        <BrowserRouter>
            <Switch>
                {true ? ( // use auth context to verify if user is authenticate
                    <MenuProvider>
                        <PartnerProvider>
                            <AuthRoutes/>
                        </PartnerProvider>
                    </MenuProvider>
                ) : (
                    <PublicRoutes/>
                )}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
