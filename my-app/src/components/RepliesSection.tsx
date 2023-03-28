// import { useState } from "react";
import ReplyFeed from "./ReplyFeed"
import MakeComment from "./MakeComment";

function RepliesSection(props: any){
    // const [replies, setReplies] = useState<[]>([]);

    //console.log( props.previousReplies )

    return(
        <div>
            <div className="bg-slate-200 border-4 rounded-lg mb-4">
            { /* Previous Comments */ }
                <ReplyFeed replies = { props.previousReplies } />
            </div>

            { /* Make New Comment */ } 
            <div className="bg-slate-200 rounded-lg w-full">
                < MakeComment parentId={props.parentId} />
            </div>
        </div>
    )
}


export default RepliesSection;