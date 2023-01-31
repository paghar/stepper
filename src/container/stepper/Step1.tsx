import React, {useEffect,FC} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {addUsersRequest,updateFromStep} from "../../redux/user/userActions";
import {Gender} from "../../data/constants";
import {gender} from "../../data/enum";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const FormSchema = z.object({
    name:z.string().min(5, {message: "Name can not be less than 4 characters"}),   
    email: z.string().email({
        message: "Must be a valid email",
    }),  
    phone: z.string(),    
    // phone: z.string().regex(new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),"Phone number format is not valid"),
    gender: z.nativeEnum(gender, {
        errorMap: (issue) => {
            switch (issue.code) {
                case "invalid_type":
                    return {message: "Invalid type error"};
                case "invalid_enum_value":
                    return {message: "Please select one of the options"};
                default:
                    return {message: "Gender is required"};
            }
        },
    }),   
});

type FormSchemaType = z.infer<typeof FormSchema>;

const Step1: FC = () => {
   
    const router = useRouter();   
    const dispatch = useDispatch();  

    const {
        register,        
        handleSubmit,
        formState: {errors},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });
     
    const onSubmit = (data:any) => { 
        dispatch(updateFromStep(1));
        dispatch(addUsersRequest(data));  
        router.push({pathname: "/Stepper", query: {formStep: 2}});                
    };

    useEffect(()=>{              
        dispatch(updateFromStep(1));
    },[]);     

    const genderItems = Gender.map((item,index)=>{        
        return <option key={index}  value={item}>{item}</option>;        
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded p-12 m-10">        

            <div className="flex flex-row flex-wrap gap-10">  
                <div className="lg:basis-[48%] md:basis-full sm:basis-full basis-full" >
                    <label className="block text-gray-700 text-sm font-bold h-8">
                        Name:
                    </label>
                    <input 
                        className="appearance-none border rounded p-2 h-16 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text"                    
                        {...register("name")}                        
                    />
                    {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div className="lg:basis-[48%] md:basis-full sm:basis-full basis-full">
                    <label className="block text-gray-700 text-sm font-bold h-8">
                    Email:
                    </label>
                    <input 
                        className="appearance-none border h-16 p-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text"                    
                        {...register("email")}                        
                    />
                    {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-10">  
                <div className="lg:basis-[48%] md:basis-full sm:basis-full basis-full">
                    <label className="block text-gray-700 text-sm font-bold h-8">
                    Phone:
                    </label>
                    <input 
                        className="appearance-none border rounded p-2 h-16 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="name" 
                        type="text"                    
                        {...register("phone")}                        
                    />
                    {errors.phone && (
                        <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                </div>
                <div className="lg:basis-[48%] md:basis-full sm:basis-full basis-full">
                    <label className="block text-gray-700 text-sm font-bold h-8">Gender:</label>
                    <select {...register("gender")} 
                        className="form-select form-select-lg h-16 mb-3 appearance-none block w-full px-4 py-2
                                text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                border border-solid border-gray-300 rounded transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    >   
                        {genderItems}                        
                    </select>
                    {errors.gender && (
                        <p className="text-sm text-red-600 mt-1">{errors.gender.message}</p>
                    )}
                </div>                
            </div>
          
            <div className="flex flex-row-reverse m-8 ">                
                <button 
                    type="submit"
                    className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium
                    text-xs leading-normal uppercase rounded hover:bg-blue hover:bg-opacity-5 focus:outline-none 
                    focus:ring-0 transition duration-150 ease-in-out h-16  lg:basis-1/6 md:basis-full sm:basis-full basis-full"
                >
                 next step
                </button>
            </div>

        </form>
    );
};

export default Step1;
