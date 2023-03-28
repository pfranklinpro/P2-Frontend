import dateFormat from "dateformat";

export default class PostContent {
    postId: string;
    content: string;
    imgUrl: string;
    likes: [];
    posted: string;
    replies: [];
    displayName: string;
    username: string;

    constructor(postId: string, 
                content: string, 
                imgUrl: string, 
                likes: [], 
                posted: string, 
                replies: [], 
                displayName: string, 
                username: string) {

        this.postId = postId;
        this.content = content;
        this.imgUrl = imgUrl;
        this.likes = likes;
        this.replies = replies;
        this.displayName = displayName;
        this.username = username;

        let dateObj = new Date(Date.parse(posted))      
        this.posted = dateFormat(dateObj, "ddd, mmm dS, yyyy, h:MM:s TT");

    }
}