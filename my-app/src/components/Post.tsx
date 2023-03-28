import { useContext, useState, useEffect } from "react";
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { HandThumbUpIcon as HandThumbUpIcon2 } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/solid'


import PostContent from "../models/PostContent";
import RepliesSection from "./RepliesSection";
import { PrincipalContext } from "../context/PrincipalProvider";
import SylvesterAPI from "../utils/ApiConfig";
import LikeContent from "../models/likeContent";

function Post(post: PostContent) {
    const [liked, setLiked] = useState<boolean>(false);
    const [showReplies, setShowReplies] = useState<boolean>(false);

    const principal = useContext(PrincipalContext);

    useEffect(() => {
        setLiked(false);
        for (let like of post.likes) {
            let tmp = like as LikeContent;
            if (principal && principal?.username === tmp.username) {
                setLiked(true);
            }
        }
    }, [post.likes, principal]);

    function handleShowReplyToggle(){
        setShowReplies(!showReplies);
    }

    async function toggleLike() {
        console.log("toggleLike called")
        if (liked) {
            await SylvesterAPI.delete("/likes?id=" + post.postId, {
                headers: {
                    authorization: principal?.token
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            setLiked(false);
            console.log("I unlike");
        } else {
            await SylvesterAPI.post("/likes?id=" + post.postId, {}, {
                headers: {
                    authorization: principal?.token
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
            setLiked(true);
            console.log("I like");
        }
    }

    return (

        <div className="block p-6 rounded-lg shadow-lg bg-gray-100">
            {/* Content */}
            <div className="flex justify-between mb-4">

                {/* head */}
                <div>
                    <UserIcon className="inline-block h-5 pr-2"/>
                    <p  className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> 
                    <Link to={"/" + post.username}>
                    { post.displayName + " @" + post.username } 
                    </Link>
                    </p>
                </div>

                <p className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { post.posted } </p>
            </div>

            {/* body */}
            <div>
                <p className="text-gray-700 mb-6 break-all"> {post.content} </p>
                    <img className="rounded-lg " src = { post.imgUrl } alt = ""/>
            </div>

            <div>
                {/* Interaction */}
                <div className="flex justify-end">
                    {post.replies.length + " "}
                    <PencilSquareIcon onClick={handleShowReplyToggle} className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out"/>
                
                    {post.likes.length + " "}
                    {
                        liked ?
                        <HandThumbUpIcon className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick = {(e) => (toggleLike())}/> :
                        <HandThumbUpIcon2 className="inline-block h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick = {(e) => (toggleLike())}/>
                    }
                </div>
            </div>

            {/* Parent ID in RepliesSection below requires the postID from current post. */}
            {showReplies ? <RepliesSection parentId = { post.postId } previousReplies = { post.replies } /> : <></> }
        </div>

    )
}


export default Post;