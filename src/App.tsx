
import './index.css'

import Navbar from './components/Navbar'
import routes from './config/routes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from './config/auth0.config';


  function App() {

  return (
    <>
      <Auth0Provider domain={auth0Config.domain} clientId={auth0Config.clientId} authorizationParams={{redirect_uri: window.location.origin}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              {routes.map((route: any, index: any) => (
                <Route key={index} path={route.path} element={<route.component/>}/>))}
              </Routes>
        </BrowserRouter>
      </Auth0Provider>
    </>
  )
}


export default App
