export default class Profile {
    profileId: string;
    displayName: string;
    location: string;
    birthDate: string;
    occupation: string;
    bio: string;
    profilePicUrl: string;
    user: string | null | undefined;




    constructor(profileId: string, displayName: string, location: string, birthDate: string, occupation: string, bio: string, profilePicUrl: string, user: string | null | undefined){
        this.profileId = profileId;
        this.displayName = displayName;
        this.location = location;
        this.birthDate = birthDate;
        this.occupation = occupation;
        this.bio = bio;
        this.profilePicUrl = profilePicUrl;
        this.user = user;
    }
}