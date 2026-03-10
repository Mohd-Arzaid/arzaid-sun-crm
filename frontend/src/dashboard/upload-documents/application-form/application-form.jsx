import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useApplicationFormStore } from "@/store/application-form-store";
import { createApplicationForm } from "@/api-services/application-form-api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const initialFormState = {
  // Full Name of Firm
  fullNameOfFirm: "",

  // Office details
  officeAddress: "",
  officeTelephone: "",
  officeFax: "",
  officeEmail: "",
  officeVillageCity: "",
  officeDistrict: "",
  officeState: "",
  officeCountry: "",
  officePinCode: "",

  // Factory details
  factoryAddress: "",
  factoryTelephone: "",
  factoryFax: "",
  factoryEmail: "",
  factoryVillageCity: "",
  factoryDistrict: "",
  factoryState: "",
  factoryCountry: "",
  factoryPinCode: "",

  // Management details
  managementDetails: [{ name: "", designation: "" }],

  // Quality control incharge details
  qualityControlInchargeDetails: [{ name: "", designation: "" }],

  // Contact person
  contactName: "",
  contactTelephone: "",
  contactEmail: "",

  // Sector
  sector: "public",

  // Indian Standard details
  indianStandardIS: "",
  indianStandardPart: "",
  indianStandardSec: "",
  indianStandardYear: "",

  // Production details
  unitsOfProduction: "",
  presentInstalledCapacity: "",
  productionQuantity: "",
  productionValue: "",

  // Fee details
  feeAmount: "",
  feeInvoiceNo: "",
  feeDate: "",
};

const ApplicationForm = () => {
  const [formData, setFormData] = useState(initialFormState);
  const loading = useApplicationFormStore((state) => state.loading);

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleManagementChange = (index, field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      managementDetails: prev.managementDetails.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleQualityControlInchargeChange = (index, field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      qualityControlInchargeDetails: prev.qualityControlInchargeDetails.map(
        (item, i) => (i === index ? { ...item, [field]: value } : item)
      ),
    }));
  };

  const addManagementRow = () => {
    setFormData((prev) => ({
      ...prev,
      managementDetails: [
        ...prev.managementDetails,
        { name: "", designation: "" },
      ],
    }));
  };

  const removeManagementRow = (index) => {
    setFormData((prev) => {
      if (prev.managementDetails.length === 1) return prev;
      return {
        ...prev,
        managementDetails: prev.managementDetails.filter((_, i) => i !== index),
      };
    });
  };

  const addQualityControlInchargeRow = () => {
    setFormData((prev) => ({
      ...prev,
      qualityControlInchargeDetails: [
        ...prev.qualityControlInchargeDetails,
        { name: "", designation: "" },
      ],
    }));
  };

  const removeQualityControlInchargeRow = (index) => {
    setFormData((prev) => {
      if (prev.qualityControlInchargeDetails.length === 1) return prev;
      return {
        ...prev,
        qualityControlInchargeDetails:
          prev.qualityControlInchargeDetails.filter((_, i) => i !== index),
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("APPLICATION FORM SUBMIT DATA:", formData);
    await createApplicationForm(formData);
  };

  return (
    <>
      <div className="text-2xl font-medium text-neutral-900">
        Application Form
      </div>

      <form
        onSubmit={handleSubmit}
        className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-6"
      >
        {/* Full Name of Firm */}
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="flex flex-col gap-1.5">
            <label className="inline-flex w-fit items-center text-sm text-neutral-900">
              Full Name of Firm *
            </label>
            <input
              type="text"
              placeholder="Enter Full Name of Firm"
              className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.fullNameOfFirm}
                onChange={handleChange("fullNameOfFirm")}
            />
          </div>
        </div>

        {/* OfficeAndFactoryDetails */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
            <div className="text-base font-medium text-neutral-900">
              Office Details
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeAddress}
                  onChange={handleChange("officeAddress")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Telephone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Telephone Number"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeTelephone}
                  onChange={handleChange("officeTelephone")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Fax Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Fax Number"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeFax}
                  onChange={handleChange("officeFax")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Email ID *
                </label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeEmail}
                  onChange={handleChange("officeEmail")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Village / City *
                </label>
                <input
                  type="text"
                  placeholder="Enter Village / City"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeVillageCity}
                  onChange={handleChange("officeVillageCity")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  District *
                </label>
                <input
                  type="text"
                  placeholder="Enter District"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeDistrict}
                  onChange={handleChange("officeDistrict")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  State *
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeState}
                  onChange={handleChange("officeState")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officeCountry}
                  onChange={handleChange("officeCountry")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Pin Code *
                </label>
                <input
                  type="text"
                  placeholder="Enter Pin Code"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.officePinCode}
                  onChange={handleChange("officePinCode")}
                />
              </div>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
            <div className="text-base font-medium text-neutral-900">
              Factory Details
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryAddress}
                  onChange={handleChange("factoryAddress")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Telephone Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Telephone Number"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryTelephone}
                  onChange={handleChange("factoryTelephone")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Fax Number *
                </label>
                <input
                  type="text"
                  placeholder="Enter Fax Number"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryFax}
                  onChange={handleChange("factoryFax")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Email ID *
                </label>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryEmail}
                  onChange={handleChange("factoryEmail")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Village / City *
                </label>
                <input
                  type="text"
                  placeholder="Enter Village / City"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryVillageCity}
                  onChange={handleChange("factoryVillageCity")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  District *
                </label>
                <input
                  type="text"
                  placeholder="Enter District"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryDistrict}
                  onChange={handleChange("factoryDistrict")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  State *
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryState}
                  onChange={handleChange("factoryState")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Country *
                </label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryCountry}
                  onChange={handleChange("factoryCountry")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Pin Code *
                </label>
                <input
                  type="text"
                  placeholder="Enter Pin Code"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.factoryPinCode}
                  onChange={handleChange("factoryPinCode")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Management Details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-medium text-neutral-900">
              Management Details
            </h3>
            <button
              type="button"
              onClick={addManagementRow}
              className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Plus className="h-4 w-4" />
              Add Row
            </button>
          </div>
          <div className="rounded-lg border border-neutral-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-200 bg-neutral-100 hover:bg-neutral-100">
                  <TableHead className="w-12 pl-4 pr-2 py-3 text-neutral-700 font-semibold text-center">
                    #
                  </TableHead>
                  <TableHead className="px-4 py-3 text-neutral-700 font-semibold text-center">
                    Name *
                  </TableHead>
                  <TableHead className="px-4 py-3 text-neutral-700 font-semibold text-center">
                    Designation *
                  </TableHead>
                  <TableHead className="w-24 pl-2 pr-4 py-3 text-neutral-700 font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formData.managementDetails.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-neutral-100 last:border-b-0 hover:bg-transparent"
                  >
                    <TableCell className="pl-4 pr-2 py-2.5 text-neutral-600 whitespace-nowrap align-middle text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.name}
                        onChange={handleManagementChange(index, "name")}
                      />
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.designation}
                        onChange={handleManagementChange(index, "designation")}
                      />
                    </TableCell>
                    <TableCell className="pl-2 pr-4 py-2.5 align-middle">
                      <button
                        type="button"
                        disabled={formData.managementDetails.length === 1}
                        onClick={() => removeManagementRow(index)}
                        className="text-sm w-full text-center font-medium text-destructive hover:underline focus:outline-none focus:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:no-underline"
                      >
                        Remove
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Quality Control Incharge Details */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base font-medium text-neutral-900">
              Quality Control Incharge Details
            </h3>
            <button
              type="button"
              onClick={addQualityControlInchargeRow}
              className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-md border border-input bg-background px-3 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Plus className="h-4 w-4" />
              Add Row
            </button>
          </div>
          <div className="rounded-lg border border-neutral-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-neutral-200 bg-neutral-100 hover:bg-neutral-100">
                  <TableHead className="w-12 pl-4 pr-2 py-3 text-neutral-700 font-semibold text-center">
                    #
                  </TableHead>
                  <TableHead className="px-4 py-3 text-neutral-700 font-semibold text-center">
                    Name *
                  </TableHead>
                  <TableHead className="px-4 py-3 text-neutral-700 font-semibold text-center">
                    Designation *
                  </TableHead>
                  <TableHead className="w-24 pl-2 pr-4 py-3 text-neutral-700 font-semibold text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {formData.qualityControlInchargeDetails.map((row, index) => (
                  <TableRow
                    key={index}
                    className="border-neutral-100 last:border-b-0 hover:bg-transparent"
                  >
                    <TableCell className="pl-4 pr-2 py-2.5 text-neutral-600 whitespace-nowrap align-middle text-center">
                      {index + 1}
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.name}
                        onChange={handleQualityControlInchargeChange(
                          index,
                          "name"
                        )}
                      />
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.designation}
                        onChange={handleQualityControlInchargeChange(
                          index,
                          "designation"
                        )}
                      />
                    </TableCell>
                    <TableCell className="pl-2 pr-4 py-2.5 align-middle">
                      <button
                        type="button"
                        disabled={
                          formData.qualityControlInchargeDetails.length === 1
                        }
                        onClick={() => removeQualityControlInchargeRow(index)}
                        className="text-sm w-full text-center font-medium text-destructive hover:underline focus:outline-none focus:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:no-underline"
                      >
                        Remove
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Contact Person Details */}
        <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
          <div className="text-base font-medium text-neutral-900">
            Contact Person
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Name *
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.contactName}
                onChange={handleChange("contactName")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Telephone Number *
              </label>
              <input
                type="tel"
                placeholder="Enter Telephone Number"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.contactTelephone}
                onChange={handleChange("contactTelephone")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Email ID *
              </label>
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.contactEmail}
                onChange={handleChange("contactEmail")}
              />
            </div>
          </div>
        </div>

        {/* Sector Details */}
        <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
          <div className="text-base font-medium text-neutral-900">Sector</div>
          <RadioGroup
            value={formData.sector}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, sector: value }))
            }
            className="flex gap-4"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="public" id="sector-public" />
              <label
                htmlFor="sector-public"
                className="inline-flex w-fit items-center text-sm text-neutral-900 cursor-pointer"
              >
                Public
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="private" id="sector-private" />
              <label
                htmlFor="sector-private"
                className="inline-flex w-fit items-center text-sm text-neutral-900 cursor-pointer"
              >
                Private
              </label>
            </div>
          </RadioGroup>
        </div>

        {/* Indian Standard Details */}
        <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
          <div className="text-base font-medium text-neutral-900">
            Indian Standard
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                IS *
              </label>
              <input
                type="text"
                placeholder="Enter IS"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.indianStandardIS}
                onChange={handleChange("indianStandardIS")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Part *
              </label>
              <input
                type="text"
                placeholder="Enter Part"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.indianStandardPart}
                onChange={handleChange("indianStandardPart")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Sec *
              </label>
              <input
                type="text"
                placeholder="Enter Sec"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.indianStandardSec}
                onChange={handleChange("indianStandardSec")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Year *
              </label>
              <input
                type="text"
                placeholder="Enter Year"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.indianStandardYear}
                onChange={handleChange("indianStandardYear")}
              />
            </div>
          </div>
        </div>

        {/* Producion Details */}
        <div className="border border-neutral-200 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Units of Production *
              </label>
              <input
                type="text"
                placeholder="Enter Units of Production"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.unitsOfProduction}
                onChange={handleChange("unitsOfProduction")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Present Installed Capacity *
              </label>
              <input
                type="text"
                placeholder="Enter Present Installed Capacity"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.presentInstalledCapacity}
                onChange={handleChange("presentInstalledCapacity")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Quantity *
              </label>
              <input
                type="text"
                placeholder="Enter Quantity"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.productionQuantity}
                onChange={handleChange("productionQuantity")}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Value *
              </label>
              <input
                type="text"
                placeholder="Enter Value"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.productionValue}
                onChange={handleChange("productionValue")}
              />
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
          <div className="text-base font-medium text-neutral-900">
            Fee Details
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                Amount *
              </label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                required
                value={formData.feeAmount}
                onChange={handleChange("feeAmount")}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Invoice No *
                </label>
                <input
                  type="text"
                  placeholder="Enter Invoice No"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.feeInvoiceNo}
                  onChange={handleChange("feeInvoiceNo")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="inline-flex w-fit items-center text-sm text-neutral-900">
                  Date *
                </label>
                <input
                  type="date"
                  placeholder="Enter Date"
                  className="w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  required
                  value={formData.feeDate}
                  onChange={handleChange("feeDate")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};
export default ApplicationForm;
