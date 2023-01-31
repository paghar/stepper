import {useRouter} from "next/router";
import React from "react";
import {useSelector} from "react-redux";
import {stepItems,stepperNumber} from "../data/constants";
import {numbers} from "../data/enum";
import Stepper from "../components/stepper/Stepper";
import Step1 from "../container/stepper/Step1";
import Step2 from "../container/stepper/Step2";
import Step3 from "../container/stepper/Step3";
import Step4 from "../container/stepper/Step4";

const StepperContainer = () => {

    const usersData = useSelector(state => state as any)?.userState;
    const formStep = usersData.formStep;  
    const router = useRouter(); 
   
    const renderStep = () => {
        if (router.query.formStep === numbers.One)
            return <Step1/>;
        else if (router.query.formStep === numbers.Two)
            return <Step2/>;
        else if (router.query.formStep === numbers.Tree)
            return <Step3/>;
        else if (router.query.formStep === numbers.Four)
            return <Step4/>;
        else 
            return <Step1/>;
    };

    return (
        <div className="m-8">
            <Stepper
                stepprNumber={stepperNumber}
                currentStep={formStep}
                stepItems={stepItems}
            />    
            {renderStep()}       
        </div>       
    );
};

export default StepperContainer;

