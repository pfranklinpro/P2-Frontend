import { createContext, useState } from "react";
import Principal from "../models/Principal";

export const PrincipalContext = createContext<Principal | null>(null);
export const SetPrincipalContext = createContext<Function | null>(null);

function principalCreator(auth: any){
    //takes in json parsed object and returns a Principal instance.
    const temp = new Principal(auth.id, auth.username, auth.email, auth.registered, auth.roleID, auth.token, auth.active);
    return temp;
}

function getInitialState(){
    //checks if there is an active user in session storage and returns a Principal instance if it exists.
    const auth = sessionStorage.getItem('auth');
    console.log(auth);
    return auth ? principalCreator(JSON.parse(auth)): null;
}

export default function PrincipalProvider({children}: any){
    const [principal, setPrincipal] = useState<Principal | null>(getInitialState);
    
    return(
    <PrincipalContext.Provider value={principal}>
        <SetPrincipalContext.Provider value={setPrincipal}>
            {children}
        </SetPrincipalContext.Provider>
    </PrincipalContext.Provider>)
}