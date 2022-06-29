import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";

import { initializeApp } from "firebase/app";
import AuthRoute from "./components/AuthRoute";
import { firebaseConfig } from "./service/firebase";


initializeApp(firebaseConfig);

function App() {
  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
      <AuthRoute>
        <Router />
        </AuthRoute>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
