import React from "react"
import RoutesCreated from "./Route/Route"
import {AppLevelContext} from "./Context/CreateContext"
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink  } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://definite-buck-51.hasura.app/v1/graphql",
      headers: {
        "x-hasura-admin-secret":"MDknftgz3VSTChhstaHAmS3Xsa0Nj2GunwpSP6UfeWeZ0gudPolCmhmpyIEGGNDS"
      }
    }),
    cache: new InMemoryCache(),
  });
 };

function App() {
  const usernameFromLocalStorage=localStorage.getItem("username")
  const [state,updateState]=React.useState({loggedIn:usernameFromLocalStorage ? true :false,username:usernameFromLocalStorage});
  function handleState({...userDetails}){
    updateState((prev)=>({
      ...prev,
      ...userDetails,
    }))
  }

  const [client]=React.useState(createApolloClient());
    console.log("hello")
  return (
    <ApolloProvider client={client}>

    <AppLevelContext.Provider value={{
      userDetails:state,
      handleUserDetails:handleState,
    }}>
      <RoutesCreated />
    </AppLevelContext.Provider>
    </ApolloProvider>

  );
}

export default App;
