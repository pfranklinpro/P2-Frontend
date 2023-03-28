import ReplyContent from "../models/ReplyContent";
import Reply from "./Reply";


function ReplyFeed(props: any) {

    // console.log(props.replies);

    function loop() {
        const cardData = props.replies;
        const cards = [];

        for (let i = 0; i < cardData.length; ++i) {
            var unique_key = "uniqueId" + i.toString();
            //console.log("ReplyFeedCard")
            //console.log(cardData[i].replied);
            //console.log("ReplyFeedCard")
            var reply = new ReplyContent(cardData[i].replyId, 
                                        cardData[i].replied,
                                        cardData[i].reply,
                                        cardData[i].imgUrl,
                                        cardData[i].displayName,
                                        cardData[i].username);
            
            //console.log(reply)
            cards.push(
                <div className={ "mt-6 ml-10 mr-6 mb-6 "} key={unique_key} >
                    <Reply { ...reply } />
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


export default ReplyFeed;