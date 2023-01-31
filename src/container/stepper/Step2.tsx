import React, {useEffect,FC} from "react";
import {useForm} from "react-hook-form";
import {addUsersRequest,updateFromStep} from "../../redux/user/userActions";
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {IUser} from "../../data/interface";
import {SpokenLanguage} from "../../data/constants";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const FormSchema = z.object({
    brithDay:z.string().min(1, {message: "Date can not be empty"}), 
    address:z.string().min(1, {message: "Address can not be empty"}), 
    height:z.number().min(100,{message: "Height cannot subceed 100 centimetres"}).max(230, {message: "Height cannot exceed 230 centimetres"}), 
    weight:z.number().min(45,{message: "Height cannot subceed 45 centimetres"}).max(250, {message: "Weight cannot exceed 250 kilograms"}),   
    spokenLanguage:z.string().array().nullable()
});

type FormSchemaType = z.infer<typeof FormSchema>;


const Step2: FC = () => {

    const usersData = useSelector(state => state) as IUser;
    const dispatch = useDispatch(); 
    const router = useRouter();  

    const {
        register,       
        handleSubmit,
        formState: {errors},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });
   
    const onSubmit = (data:any) => {        
        dispatch(addUsersRequest(data)); 
        router.push({pathname: "/Stepper", query: {formStep:3}});     
    };

    useEffect(()=>{        
        dispatch(updateFromStep(2));
    },[]);   

    const genderItems = SpokenLanguage.map((item,index)=>{        
        return (
            <div className="pl-4" key={index}>
                <input {...register("spokenLanguage")} type="checkbox" value={item}/>
                <label className="text-gray-700 text-sm h-8 m-2">{item}</label>              
            </div>
        );        
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded p-12 m-10">
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="block text-gray-700 text-sm font-bold h-8" >
                        Date of Birth:
                    </label>
                    <input 
                        className="appearance-none border rounded h-16 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="brithDay" 
                        type="text"                    
                        {...register("brithDay")}                       
                    />
                    {errors.brithDay && (
                        <p className="text-sm text-red-600 mt-1">{errors.brithDay.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold h-8 " >
                        Address:
                    </label>
                    <input 
                        className="appearance-none border h-16 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="address" 
                        type="text"                    
                        {...register("address")}                       
                    />
                    {errors.address && (
                        <p className="text-sm text-red-600 mt-1">{errors.address.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold h-8 " >
                        Height:
                    </label>
                    <input 
                        className="appearance-none border h-16 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="height" 
                        type="number"    
                        { ...register("height", {valueAsNumber: true} ) }                                            
                    />
                    {errors.height && (
                        <p className="text-sm text-red-600 mt-1">{errors.height.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold h-8" >
                        Weight:
                    </label>
                    <input 
                        className="appearance-none border h-16 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="Weight:" 
                        type="number"  
                        { ...register("weight", {valueAsNumber: true} ) }  
                        defaultValue={usersData.weight}
                    />
                    {errors.weight && (
                        <p className="text-sm text-red-600 mt-1">{errors.weight.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-bold h-8" >                        
                        Spoken Lanquage:                 
                    </label>   
                    {genderItems}             
                </div>
            </div>
 
            <div className="grid grid-cols-8 mt-4">
                <div className="col-span-7"></div>
                <button 
                    type="submit"
                    className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium
                    text-xs leading-normal uppercase rounded hover:bg-blue hover:bg-opacity-5 focus:outline-none 
                    focus:ring-0 transition duration-150 ease-in-out h-16 "
                >
                 next step
                </button>
            </div>     
            
        </form>
    );
};

export default Step2;
