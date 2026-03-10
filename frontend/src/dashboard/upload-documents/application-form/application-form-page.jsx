import React from "react";
import ApplicantAndProductInformation from "./applicant-and-product-information";
import ApplicationForm from "./application-form";
import { useNavigate } from "react-router-dom";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  return (
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
          onClick={() => navigate("/upload-documents")}
          className="flex-1 inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-input bg-background px-4 text-base font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApplicationFormPage;
