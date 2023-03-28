import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PrincipalContext, SetPrincipalContext } from '../context/PrincipalProvider';
import Principal from '../models/Principal';
import SylvesterAPI from '../utils/ApiConfig';

function SignupPage(){
    const [username, setUsername] = useState<string>("");
    const [password1, setPassword1] = useState<string>("");
    const [password2, setPassword2] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [error, setError] = useState<string>("");
    const principal = useContext(PrincipalContext);
    const setPrincipal = useContext(SetPrincipalContext);
    const navigate = useNavigate();

    console.log(principal);

    async function submit(e: FormEvent){
        e.preventDefault();
        await SylvesterAPI.post("/users",{
            username: username,
            password1: password1,
            password2: password2,
            email: email,
            displayName: name,
            birthDate: dob
        }).then((response)=>{
            setError("")
            console.log(response.data);
            let temp = new Principal(response.data.id,  response.data.username, response.data.email, response.data.registered, response.data.roleID, response.data.token, response.data.active)
            window.sessionStorage.setItem("auth", JSON.stringify(temp));
            setPrincipal!(temp);
            navigate("/");

        }).catch((error)=>{
            setError(error.response.data.message)
            setTimeout(() =>setError(""),5000);
            console.log(error.response.data.message);
        });
    }

    return (
        <form onSubmit={(e)=>submit(e)} className="flex justify-center items-center" >
            <div className="flex flex-col items-center gap-7 shadow-xl rounded-xl mt-20 px-10 py-10 border-solid border-2">
                <h1 className="font-serif font-bold text-5xl">Create Account</h1>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Password" value={password1} onChange={(e)=>setPassword1(e.target.value)} />
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Confirm Password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Display Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <div>
                <p className='inline-block pr-5'>Birth Date</p>
                <input type="date" className="bg-gray-100 shadow-xl rounded-md px-5 py-2"  placeholder="Date of Birth" value={dob} onChange={(e)=>setDob(e.target.value)} />
                </div>
                
                <button className="bg-slate-800 rounded-md text-white mt-2 px-5 py-2 ease-out duration-300 hover:scale-110">Sign Up!</button>
                { error ? <p className='text-red-600'>{error}</p>: null }
                <Link to={"/login"} className="text-blue-700 underline">Already a member? Log in </Link>
            </div>
        </form>
    );
}


export default SignupPage;