import React, { useState } from "react";
import ApplicantAndProductInformation from "./applicant-and-product-information";
import ApplicationForm from "./application-form";
import { useNavigate } from "react-router-dom";
import { checkApplicationProgress } from "@/api-services/application-progress-api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [checking, setChecking] = useState(false);

  const handleNextClick = async () => {
    setChecking(true);
    try {
      const result = await checkApplicationProgress();

      if (!result) {
        // Error scenario already handled via toast in API service
        return;
      }

      const { applicantFormFilled, applicationFormFilled } = result;

      if (applicantFormFilled && applicationFormFilled) {
        navigate("/upload-documents");
        return;
      }

      if (!applicantFormFilled && !applicationFormFilled) {
        setAlertMessage(
          "Please fill both forms before proceeding to upload documents."
        );
      } else if (!applicantFormFilled && applicationFormFilled) {
        setAlertMessage(
          "Please fill the Applicant & Product Information form before proceeding."
        );
      } else if (applicantFormFilled && !applicationFormFilled) {
        setAlertMessage("Please fill the Application Form before proceeding.");
      }

      setAlertOpen(true);
    } finally {
      setChecking(false);
    }
  };

  return (
    <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
      <div className="flex flex-col gap-6">
        <ApplicantAndProductInformation />
        <ApplicationForm />

        {/* Navigation Buttons */}
        <div className="flex flex-row gap-3">
          <button
            type="button"
            className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-input bg-background px-4 text-base font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={checking}
            className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-input bg-background px-4 text-base font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {checking ? "Checking..." : "Next"}
          </button>
        </div>
      </div>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Cannot proceed</AlertDialogTitle>
          <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setAlertOpen(false)}>
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ApplicationFormPage;
