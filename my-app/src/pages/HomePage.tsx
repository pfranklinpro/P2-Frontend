import { useState, useEffect } from "react";
import Feed from "../components/Feed";
import SylvesterAPI from "../utils/ApiConfig";


function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(setPosts);
    }, []);

    useEffect(() => {
        let intervalId = setInterval(fetch , 1000, setPosts );
        return () => { clearInterval(intervalId) }
    }, []);


    async function fetch(setter: any) {
        await SylvesterAPI.get("/posts/posted?limit=4",{})
        .then((response) => {
            console.log(response.data);
            setter(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="h-100 w-1100">
            <ol>
                <Feed posts={posts} />
            </ol>
        </div>
    )
}

export default HomePage;