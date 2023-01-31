import React, {useEffect} from "react";
import {updateFromStep} from "../../redux/user/userActions";
import {useSelector, useDispatch} from "react-redux";
import {IUser} from "../../data/interface";

const Step4 = () => {

    const usersData = useSelector(state => state as any)?.userState;
    const userInfo = usersData.users as IUser;  
    const dispatch = useDispatch(); 
    
    const itemText = (text:string) =>{
        return(
            <label className="block text-gray-700 text-sm font-bold h-8">{text}</label> 
        );
    };

    useEffect(()=>{           
        dispatch(updateFromStep(4));
    },[]);

   
    return (
        <div className="bg-white shadow-md rounded p-12 m-10 break-words lg:text-base md:text-xs sm:text-xs text-xs"> 

            {itemText(`Step 1`)}              
            <div className="ml-6">                
                {itemText(`Name:${userInfo?.name}`)}
                {itemText(`Email:${userInfo?.email}`)}
                {itemText(`Phone-number:${userInfo?.phone}`)}
                {itemText(`Gender:${userInfo?.gender}`)}               
            </div> 

            {itemText(`Step 2`)}           
            <div className="ml-6">
                {itemText(`Date of birth:${userInfo?.brithDay}`)}
                {itemText(`Address:${userInfo?.address}`)}
                {itemText(`Spoken Languages:${userInfo?.spokenLanguage}`)}
                {itemText(`Height:${userInfo?.height}`)}  
                {itemText(`Weight:${userInfo?.weight}`)}                 
            </div>                   
                
            {itemText(`Step 3`)}
            <div className="ml-6">
                {itemText(`Accept condition:${userInfo?.condation}`)}  
            </div>          
                
        </div>
    );
};

export default Step4;
