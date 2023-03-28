import { UserIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Profile from "../models/Profile";
import Feed from "../components/Feed";
import SylvesterAPI from '../utils/ApiConfig';
import { useParams } from "react-router-dom";


function PublicProfilePage() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [userId, setUserId] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [posts, setPosts] = useState([]);
    const params = useParams();
    const username = params.username;

    async function fetchUser() {
        await SylvesterAPI.get(`/users/username?username=${username}`)
            .then((response) => {
                console.log(response.data);
                setUserId(response.data.userId);
            }).catch((error) => {
                console.log(error);
            });
    }
    
    async function fetch(setter:any) {
        await SylvesterAPI.get(`/profiles/user?id=${userId}`)
            .then((response) => {
                let resdata = response.data;
                console.log(resdata);
                let temp = new Profile(resdata.profileId, resdata.displayName, resdata.location, resdata.birthDate,resdata.occupation, resdata.bio, resdata.profilePicUrl, userId)
                setter!(temp);
            }).catch( (error) => {
                setError(error.response.data.message);
            }) 
    }

    async function fetchPosts(setter: any) {
        await SylvesterAPI.get(`/posts/user?id=${userId}`)
            .then((response) => {
                //console.log(response.data);
                setter(response.data);
            }).catch((error) => {
                console.log(error);
            });
    }
    
    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if(userId) {
            fetch(setProfile);
            fetchPosts(setPosts);
        }
    }, [userId]);

    return (
        <div>
            <div className="flex flex-row border-solid border-4 h-full shadow-md bg-white">
                <div>
                    {profile === null ? <UserIcon /> : (
                    profile.profilePicUrl === "" ? <UserIcon /> : <img src={profile.profilePicUrl} alt=""/>
                    )}
                </div>
                <div className="flex-col self-center px-3">
                    <h1 className = "text-lg font-bold">{profile?.displayName}</h1>
                    <h2>{"@" + username}</h2>
                </div>
            </div>
            { profile?.bio !== "" ?
                <div className = "flex border-solid border-4 h-full shadow-md bg-white">
                {profile?.bio}
            </div> : <></>
            }
            <div className="flex border-solid border-4 h-full shadow-md bg-white">
            <ul>
                { profile?.location !== "" ?
                    <li>
                    <p className='inline-block pr-5'>Location</p>
                    {profile?.location}
                </li> : <></>
                }
                { profile?.occupation !== "" ?
                    <li>
                    <p className='inline-block pr-5'>Occupation</p>
                    {profile?.occupation}
                </li> : <></>
                }
            </ul>
            </div>

            <div className="border-solid border-4 w-full">
                <h1 className="text-lg font-bold text-center">Posts</h1>
                <ol>
                    <Feed posts={posts} />
                </ol>
            </div>
        </div>
    );
}


export default PublicProfilePage;