import React from "react";

const ApplicantAndProductInformation = () => {
  return (
    <>
      <div className="text-2xl font-medium text-neutral-900">
        Applicant & Product Information
      </div>

      <div className="grid grid-cols-2 gap-6 border border-neutral-200 rounded-lg p-4">
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Indian Standard (IS) *
          </label>
          <input
            type="text"
            placeholder="Enter Indian Standard (IS)"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Product Name *
          </label>
          <input
            type="text"
            placeholder="Enter Product Name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Name of Contact Person *
          </label>
          <input
            type="text"
            placeholder="Enter Contact Person Name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Email ID *
          </label>
          <input
            type="email"
            placeholder="Enter Email ID"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Phone Number *
          </label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Country Name *
          </label>
          <input
            type="text"
            placeholder="Enter Country Name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Address *
          </label>
          <input
            placeholder="Enter Address"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
          />
        </div>

        {/* Submit Button - full width, same box */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ApplicantAndProductInformation;
