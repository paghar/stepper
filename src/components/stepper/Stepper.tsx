import React from "react";
import {IStepItems} from "../../data/interface";

interface IProps {
    stepprNumber:number,
    currentStep:number,
    stepItems:IStepItems[]
}

const Stepper = (props:IProps) => {

    const passedStepItem=(item:IStepItems)=>{
        return (
            <>
                <span className="h-10 w-10 rounded-full bg-blue-600 text-center text-[14px] font-bold leading-10 text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>           
                <span className="ml-4 text-base font-medium text-gray-900">{item.text}</span>
            </>
        );
    };

    const currentStepItem=(item:IStepItems)=>{
        return (
            <>
                <span className="h-10 w-10  border-2 rounded-full border-blue-600	 text-center text-[14px] font-bold leading-10 text-blue-600">
                    {item.id}
                </span>           
                <span className="ml-4 text-base font-medium text-blue-600">{item.text}</span>
            </>
        );
    };

    const upCommingStepItem=(item:IStepItems)=>{
        return (
            <>
                <span className="h-10 w-10  border-2 rounded-full  border-gray-400	 text-center text-[14px] font-bold leading-10 text-bule-600">
                    {item.id}
                </span>           
                <span className="ml-4 text-base font-medium text-bule-400">{item.text}</span>
            </>
        );
    };

    const stepItem= (item:IStepItems) =>{
        if (item.id === props.currentStep)
            return currentStepItem(item);
        else if (item.id < props.currentStep)
            return passedStepItem(item);
        else if (item.id > props.currentStep)
            return upCommingStepItem(item);
        else return currentStepItem(item);   
    };


    const renderStepItems = () =>{
        return props.stepItems.map((item,index)=>(
            <li key={index} className="relative flex items-center justify-center p-4">
                {stepItem(item)}
            </li>
        ));
    };
 
    return (
        <div>
            <ol className="grid grid-cols-1 divide-x divide-gray-400 overflow-hidden rounded-lg border border-gray-400 text-sm text-gray-500 sm:grid-cols-4">
                {renderStepItems()}
            </ol>
        </div>
    );
};

export default Stepper;
