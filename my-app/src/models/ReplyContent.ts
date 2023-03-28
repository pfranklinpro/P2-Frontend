import dateFormat from "dateformat";

export default class ReplyContent {
    replyId: string;
    replied: string;
    reply: string;
    imgUrl: string;
    displayName: string;
    username: string;
    

    constructor(replyId: string, replied: string, reply: string, imgUrl: string, displayName: string, username: string) {
        this.replyId = replyId;

        let dateObj = new Date(Date.parse(replied))      
        this.replied = dateFormat(dateObj, "ddd, mmm dS, yyyy, h:MM:s TT");

        this.reply = reply;
        this.imgUrl = imgUrl;
        this.displayName = displayName;
        this.username = username;
    }
}