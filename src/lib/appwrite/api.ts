import { ID, Query } from "appwrite";

import { appwriteConfig, account, databases, storage, avatars } from "./config";
import { IUpdatePost, INewPost, INewUser, IUpdateUser } from "@/types";

export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );

    return newAccount;

    // if (!newAccount) throw Error;

    // const avatarUrl = avatars.getInitials(user.name);
  } catch (error) {
    console.log(error);
    return error;
  }
}
