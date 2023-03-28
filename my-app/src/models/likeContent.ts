export default class LikeContent {
    likeId: string;
    displayName: string;
    username: string;

    constructor(likeId: string, displayName: string, username: string) {
        this.likeId = likeId;
        this.displayName = displayName;
        this.username = username;
    }
}