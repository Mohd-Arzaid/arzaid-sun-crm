import React from "react";

const UploadDocuments = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-medium text-neutral-900">
        Upload Documents
      </div>

      <div className="border border-neutral-200 rounded-lg p-4 transition-colors">
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            <span className="mr-1 font-semibold">1.</span>
            Authority Letter in Favour of Signatory
            <span className="text-sm font-normal text-neutral-700">
              (in case application signed by any person other than CEO of the
              firm)
            </span>
          </label>
        </div>

        <div className="pt-4">
          <input
            type="file"
            id="file-company-registration"
            name="companyRegistration"
            className="sr-only"
            accept=".pdf,.doc,.docx,.xls,.xlsx"
          />

          <div className="flex flex-wrap items-center gap-4">
            <label
              htmlFor="file-company-registration"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm hover:bg-[#f9f9f9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Upload document
            </label>

            <button
              type="button"
              className="rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              View Document Format
            </button>

            <button
              type="button"
              className="text-sm font-medium text-neutral-600 underline underline-offset-4 hover:text-neutral-900 focus-visible:outline-none focus-visible:underline"
            >
              Click here to check mistakes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
