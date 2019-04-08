export class LoggedInUser {
    constructor(userName: string, dataPermission: string, userPermission: string, userLocked: boolean, nameDisplay: string, token: string) {
        this.userName = userName;
        this.dataPermission = dataPermission;
        this.userPermission = userPermission;
        this.userLocked = userLocked;
        this.nameDisplay = nameDisplay;
        this.token = token;
    }
    public userName: string;
    public personID: string;
    public dataPermission: string;
    public userPermission: string;
    public password: string;
    public encrypted: boolean;
    public userLocked: boolean;
    public nameDisplay: string;
    public failedLogin: number;
    public lastSignOnDateTime: Date;
    public lastUpdateUserName: string;
    public lastUpdateDateTime: Date;
    public token: string;
}