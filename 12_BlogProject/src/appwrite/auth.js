import config from "../conf/config";
import { Client, Account, ID } from "appwrite";

// const client = new Client()

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
                .setEndpoint(config.appwriteUrl)
                .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }

    // Function to create New account (sign up)
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // Call login method on successfull account creation
                return this.login({email, password});
            } 
            else {
                return userAccount;
            }
        } 
        catch (error) {
            console.log("Appwrite error --> createAccount --> error: ",error);
            throw error;
        }
    }

    // Function to login
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite error --> login --> error: ",error);
            throw error;
        }
    }

    // Function to get current User
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error --> getCurrentUser --> error: ",error);
            throw error;
        }
        return null;
    }

    // Function to logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite error --> logout --> error: ",error);
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService;