import { GifIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

import { useState, useContext } from "react";
import { PrincipalContext } from '../context/PrincipalProvider';
import SylvesterAPI from '../utils/ApiConfig';

import TenorSearch from "./TenorSearch";

function MakePost(props: any) {
    const [post, setPost] = useState<string>("");
    const [tenorState, setTenorState] = useState<boolean>(false);
    const [tenorUrl, setTenorUrl] = useState<string>("");
    const principal = useContext(PrincipalContext); 

    async function submit() {
        await SylvesterAPI.post("posts", {
            content: post,
            imgUrl: tenorUrl
        }, {
            headers: {
                authorization: principal?.token
            }
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

        setPost("");
        toggleTenor()
    }

    function toggleTenor() {
        setTenorState(!tenorState);
    }

    return (
    <div className="flex flex-col items-center  ">
        <div className="md:flex flex-start pt-8 w-full">
            <div className="block p-6 rounded-lg shadow-lg bg-gray-200  ml-6 mr-6 w-full">
                <input className="rounded p-1 text-gray-700 mb-6 h-100 w-full" placeholder="Sufferin' succotash, spit it out!" value = {post} onChange={(e) => setPost(e.target.value)}></input>
                
                {tenorState ? <TenorSearch passData={setTenorUrl}/> : <div></div>}
                
                <div className="border-double border-4 flex justify-end">
                    <GifIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={toggleTenor}/>
                    <PencilSquareIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={submit}/>
                </div>
            </div>
        </div>
    </div>)
}

export default MakePost;
