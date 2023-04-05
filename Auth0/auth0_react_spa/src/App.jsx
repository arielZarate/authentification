import './App.css'
import Login from './Auth0/Login/Login'
import Logout from './Auth0/Logout/Logout'
import Profile from './Auth0/Profile/Profile';
import { useAuth0 } from "@auth0/auth0-react";
function App() {

  //esto es un hook de auth0
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <h1>Auth + React</h1>
      <div className="card">
      {(isAuthenticated)
      ?(<><Profile/> <Logout/>
      </>
        ) 
          : (<Login/>)
       }
     
    
      </div>
    
    </div>
  )
}

export default App
