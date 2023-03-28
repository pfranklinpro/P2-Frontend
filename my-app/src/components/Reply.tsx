import { UserIcon } from "@heroicons/react/24/outline";
import ReplyContent from "../models/ReplyContent";
import { Link } from 'react-router-dom';

function Reply(reply: ReplyContent) {
    return (
        <div>
            <div className="flex justify-between mb-4">

                {/* heading */}
                <div>
                    <UserIcon className="inline-block h-5 pr-2"/>
                    <p className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> 
                    <Link to={ "/" + reply.username }>
                    { reply.displayName + " @" + reply.username } 
                    </Link>
                    </p>
                </div>

                <p  className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { reply.replied } </p>
            </div>

            <p className="text-gray-700 mb-6 break-all"> {reply.reply} </p>
            <img className="sm rounded-lg" src = { reply.imgUrl }/>
        </div>
    )
}

export default Reply;