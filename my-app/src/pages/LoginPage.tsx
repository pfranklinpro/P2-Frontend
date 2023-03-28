import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useContext, useState } from 'react';
import SylvesterAPI from '../utils/ApiConfig';
import { PrincipalContext, SetPrincipalContext } from '../context/PrincipalProvider';
import Principal from '../models/Principal';


function LoginPage(){
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const principal = useContext(PrincipalContext); 
    const setPrincipal = useContext(SetPrincipalContext);

    console.log(principal);

    async function submit(e: FormEvent){
        e.preventDefault();
        await SylvesterAPI.post("/auth",{
            username: username,
            password: password
        }).then((response) => {
            setError("")
            console.log(response)
            let temp = new Principal(response.data.userId,  response.data.username, response.data.email, response.data.registered, response.data.roleID, response.data.token, response.data.active)

            window.sessionStorage.setItem("auth", JSON.stringify(temp));
            setPrincipal!(temp);
            navigate("/");
        }).catch((error) => {
            console.log(error)
                setError(error.response.data.message);
                setTimeout(() =>setError(""),5000);
            });

        //console.log("Client attempted login: (Username: " + username + " Password: " + password+ ")");
        setPassword("")
        setUsername("")
    }



    return (
        
        <form onSubmit={(e)=> submit(e)} className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-40 px-10 py-16">
                <h1 className="font-serif font-bold text-5xl">Login</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" type="text" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">LOGIN</button>
                
                { error ? <p className='text-red-600'>{error}</p>: null }
                <Link to={"/signup"} className="text-blue-700 underline">Create new account</Link>
            </div>
        </form>
    );
}


export default LoginPage;