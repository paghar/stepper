import {gender,condation} from "./enum";

export interface IUser {
    id:string,
    name:string, 
    phone:string,   
    email:string,
    gender:gender,
    brithDay:string,
    address:string,
    height:string,
    weight:string,
    spokenLanguage:[],
    condation:condation
}

export interface IUserState{
    users:IUser,
    formStep: number 
}

export interface IStepItems {
    id:number,
    text:string,
}