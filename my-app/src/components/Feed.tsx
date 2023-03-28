import PostContent from "../models/PostContent";
import Post from "./Post";


function Feed(props: any) {

    //console.log(props.posts);

    function loop() {
        const cardData = props.posts;
        const cards = [];

        for (let i = 0; i < cardData.length; ++i) {
            var unique_key = "uniqueId" + i.toString();
            // var post = new PostContent(cardData[i].postId);
            var post = new PostContent(cardData[i].postId, 
                                        cardData[i].content,
                                        cardData[i].imgUrl,
                                        cardData[i].likes,
                                        cardData[i].posted,
                                        cardData[i].replies,
                                        cardData[i].displayName,
                                        cardData[i].username);

            cards.push(
                <div className={ "mt-6 ml-6 mr-6 mb-6 "} key={unique_key}>
                    <Post { ...post } />
                </div>
            )
        }
        
        return cards;
    }

    return (
        <div>
            { loop() }
        </div>
    )
}


export default Feed;