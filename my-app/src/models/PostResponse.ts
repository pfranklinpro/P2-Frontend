export default class PostResponse {
    content: string;
    imgUrl: string;
    // likes: string;
    postId: string;
    posted: string;
    // replies: string;

    constructor(content: string, imgUrl: string, postId: string, posted: string) {
        this.content = content;
        this.imgUrl = imgUrl;
        this.postId = postId;
        this.posted = posted;
    }
}