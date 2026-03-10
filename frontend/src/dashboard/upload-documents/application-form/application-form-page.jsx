import React from "react";
import ApplicantAndProductInformation from "./applicant-and-product-information";
import ApplicationForm from "./application-form";

const ApplicationFormPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ApplicantAndProductInformation />
      <ApplicationForm />
    </div>
  );
};

export default ApplicationFormPage;
