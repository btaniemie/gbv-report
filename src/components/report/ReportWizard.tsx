"use client"
import { useState } from "react";

export default function ReportWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [reportData, setReportData] = useState<any>(null);
  
    const handleStepComplete = async (data: any) => {
      setReportData({ ...reportData, ...data });
  
      if (currentStep === 4) {
        return;
      }
  
      setCurrentStep((prev) => prev + 1);
    };

}