import React, { useState } from "react";

const ApplicantAndProductInformation = () => {
  const [formData, setFormData] = useState({
    indianStandard: "",
    productName: "",
    contactPersonName: "",
    email: "",
    phoneNumber: "",
    countryName: "",
    address: "",
  });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Applicant & Product Information form data:", formData);
  };

  return (
    <>
      <div className="text-2xl font-medium text-neutral-900">
        Applicant & Product Information
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6 border border-neutral-200 rounded-lg p-4"
      >
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Indian Standard (IS) *
          </label>
          <input
            type="text"
            placeholder="Enter Indian Standard (IS)"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
            value={formData.indianStandard}
            onChange={handleChange("indianStandard")}
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
            value={formData.productName}
            onChange={handleChange("productName")}
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
            value={formData.contactPersonName}
            onChange={handleChange("contactPersonName")}
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
            value={formData.email}
            onChange={handleChange("email")}
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
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
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
            value={formData.countryName}
            onChange={handleChange("countryName")}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="inline-flex w-fit items-center text-sm text-neutral-900">
            Address *
          </label>
          <input
            type="text"
            placeholder="Enter Address"
            className="w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900"
            required
            value={formData.address}
            onChange={handleChange("address")}
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
      </form>
    </>
  );
};

export default ApplicantAndProductInformation;
