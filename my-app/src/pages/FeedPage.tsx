import { useEffect, useState } from "react";
import MakePost from "../components/MakePost";
import SylvesterAPI from "../utils/ApiConfig";
//import PostResponse from "../models/PostResponse";
import Feed from "../components/Feed";

function FeedPage() {
    // const [posts, setPosts] = useState<PostResponse[] | null>([]);
    // const [error, setError] = useState<string>("");

    // console.log(error);

    // useEffect(() => {
    //     getPosts();
    // });

    // useEffect(() => {
    //     let intervalId = setInterval(getPosts , 5000);
    //     return () => { clearInterval(intervalId) }
    // });

    // async function getPosts() {
    //     await SylvesterAPI.get("/posts")
    //     .then((response) => {
    //         setError("");
    //         let resdata = response.data;
    //         let newPosts: PostResponse[] = [];
    //         for (let i = 0; i < resdata.length; i++) {
    //             let post = resdata[0];
    //             let newPost: PostResponse = new PostResponse(post.content, post.imgUrl, post.postId, post.posted);
    //             newPosts.push(newPost);
    //         }
    //         setPosts(newPosts);
    //         console.log(posts);
    //     }).catch( (error) => {
    //         setError(error.response.data.message);
    //     }) 
    // }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(setPosts);
    }, []);

    useEffect(() => {
        let intervalId = setInterval(fetch , 1000, setPosts );
        return () => { clearInterval(intervalId) }
    }, []);


    async function fetch(setter: any) {
        await SylvesterAPI.get("/posts",{})
        .then((response) => {
            //console.log(response.data);
            setter(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
            {/* Creating Post */}
            <MakePost />

            { /* Feed */ }
            <Feed posts={posts} />
        </div>
    );
}


export default FeedPage;