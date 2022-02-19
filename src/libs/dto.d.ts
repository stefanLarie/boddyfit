/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.32.889 on 2021-06-30 17:22:15.

export interface RestUserMenu {
    name: string;
    menuItems: RestUserMenuItem[];
}

export interface RestUserMenuItem {
    type: string;
    name: string;
    relLink: string;
}

export interface RestUserProfile {
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userMenu: RestUserMenu[];
}

export interface TempUser {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    passwordConfirmation: string;
    email: string;
    gender: number;
}

export type RestUserMenuItemType = "PROFILE" | "MY_TEAM";
