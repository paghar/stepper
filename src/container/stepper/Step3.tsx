import React, {useEffect,FC} from "react";
import {useForm} from "react-hook-form";
import {addUsersRequest,updateFromStep} from "../../redux/user/userActions";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {condition} from "../../data/constants";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const FormSchema = z.object({
    condation: z
        .string({invalid_type_error: "Please accept the condition"})
        .refine((val) => condition.map((item: string) => item).includes(val)),
});  

type FormSchemaType = z.infer<typeof FormSchema>;

const Step2:FC = () => {  
   
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
        router.push({pathname: "/Stepper", query: {formStep: 4}});       
    };

    useEffect(()=>{
        dispatch(updateFromStep(3));
    },[]);  

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded p-12 m-10">            
            
            <div className="grid grid-cols-2 gap-4">
                <label className="block text-gray-700 text-sm font-bold h-8" >
                    Accept the Condation:
                </label>   
            </div>

            <div>
                <input {...register("condation")} type="radio" value="Yes" />
                <label>Yes</label>                  
            </div>

            <div>
                <input {...register("condation")} type="radio" value="No" />  
                <label>No</label>                  
            </div>

            {errors.condation && (
                <p className="text-sm text-red-600 mt-1">{errors.condation.message}</p>
            )}            
            
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
