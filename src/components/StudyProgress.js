import React, {useState, useEffect} from 'react'
    import { Container } from "react-bootstrap";
    import {
        Stepper,
        Step,
        useStepper,
        StepNumber,
        StepTitle,
        StepStatus,
        StepDescription,
    } from "react-progress-stepper";

 const StudyProgress = () => {
        const { step, incrementStep, decrementStep } = useStepper(0, 4);
        return (
                <div id="responsive">
                   
                    <Container  className="py-5">
                        <div className="info">
                            <h2>Study Progress</h2>
    
                            <Stepper step ={2}>
                                <Step>
                                    <StepNumber />
                                    <StepTitle id = "versatile">FDA Receives Information</StepTitle>
                                    <StepStatus />
                                    <StepDescription>
                                        Bavaria sends drugs to FDA
                                        Jane Hopkins sends eligible patients
                                    </StepDescription>
                                </Step>
                                <Step>
                                    <StepNumber />
                                    <StepTitle>FDA Processing</StepTitle>
                                    <StepStatus />
                                    <StepDescription>
                                        FDA relabels assigns, and sends drugs to Jane Hopkins
                                    </StepDescription>
                                </Step>
                                <Step>
                                    <StepNumber />
                                    <StepTitle>Administer Doses</StepTitle>
                                    <StepStatus />
                                    <StepDescription >
                                        Doctor administer doses and records visit notes
                                    </StepDescription>
                                </Step>
                                <Step>
                                    <StepNumber />
                                    <StepTitle>Study Results Available</StepTitle>
                                    <StepStatus />
                                    <StepDescription > Study Results are released </StepDescription>
                                </Step>
                                
                            </Stepper>
                        </div>
                    </Container>
                </div>
            
        );
    };
    
    export default StudyProgress;