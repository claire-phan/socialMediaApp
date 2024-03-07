import { ID } from 'appwrite'

import { INewUser } from "@/types";
import { account } from './config';

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(), //provides you with a unique id every time
            user.email,
            user.password,
            user.name
        )

        return newAccount;
    } catch (error) {
        console.log(error);
        return error;
    }
}