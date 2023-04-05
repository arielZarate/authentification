import './App.css'
import axios from 'axios';


import { useAuth0 ,withAuthenticationRequired} from "@auth0/auth0-react"; //hook

//const { apiOrigin = "http://localhost:3000", VITE_AUDIENCE }=import.meta.env;

function App() {

  //esto es un hook de auth0
  const { isAuthenticated ,
       loginWithRedirect,
       loginWithPopup,
       user,
       logout,
     isLoading ,
       getAccessTokenSilently

  } = useAuth0();

            
  //  const { user,isAuthenticated,loginWithRedirect,isLoading} = useAuth0()
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
 

//FUNCIONES AL BACK


 const Landing=async()=>{
   const response=await axios.get(`http://localhost:3000/`)
  const info=response.data;
   return  info;

 }
 const Home=async()=>{
  try {

      //creacion de token
    const token = await getAccessTokenSilently();

       console.log("token de front : \n", token)

    const response = await axios.get(`http://localhost:3000/home`, 
    //encabezado header con token
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.data.json();

    console.log(responseData)
    return responseData;
   
  } catch (error) {
     console.log(error.message)
  }

 }

  return (
    <div className="App">
      <h1>Auth + React</h1>
         
         <ul>
          <li><button onClick={() =>loginWithPopup()}>Login con Poput</button></li>
          <li><button onClick={() => loginWithRedirect()}>Login con redirect</button></li>
          <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> LogOut
           </button></li>
         </ul>

         <ul>
          <li>
            <button onClick={()=>Landing()}>LANDING</button>
          </li>
          <li>
            <button onClick={()=>Home()} /* disabled={!VITE_AUDIENCE} */>IR A RUTA PROTEGIDA HOME</button>
          </li>
         </ul>

 
  
             {/* Profile */}
 
         <h3>El usuario esta  {isAuthenticated ? 'Logueado' : 'No logueado' }</h3>
            {
              isAuthenticated &&(
             
                 <>
                <h3>{user.nickname}</h3>
                <img src={user.picture} alt=''/>
                <h4>{user.email}</h4>
                <pre style={{backgroundColor:'black' , color:'yellowgreen'}}>
                    {JSON.stringify(user,null,1)}
                
                </pre>
                 </> 
              )
            }
    </div>
  )
}


/* export default withAuthenticationRequired(App, {
  onRedirecting: () => <div>Loading ...</div>
});
 */

export default App;




/* 
 {(isAuthenticated)
      ?(<><Profile/> <Logout/>
      </>
        ) 
          : (<Login/>)
       }
*/