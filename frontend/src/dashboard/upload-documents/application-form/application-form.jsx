import React, { useState } from "react";
import { Plus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ApplicationForm = () => {
  const [managementDetails, setManagementDetails] = useState([
    { name: "", designation: "" },
  ]);

  const [qualityControlInchargeDetails, setQualityControlInchargeDetails] =
    useState([{ name: "", designation: "" }]);

  return (
    <>
      <div className="text-2xl font-medium text-neutral-900">
        Application Form
      </div>

      <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-6">
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
              onClick={() =>
                setManagementDetails((prev) => [
                  ...prev,
                  { name: "", designation: "" },
                ])
              }
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
                {managementDetails.map((row, index) => (
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
                        onChange={(event) => {
                          const value = event.target.value;
                          setManagementDetails((prev) =>
                            prev.map((item, i) =>
                              i === index ? { ...item, name: value } : item
                            )
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.designation}
                        onChange={(event) => {
                          const value = event.target.value;
                          setManagementDetails((prev) =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, designation: value }
                                : item
                            )
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell className="pl-2 pr-4 py-2.5 align-middle">
                      <button
                        type="button"
                        disabled={managementDetails.length === 1}
                        onClick={() =>
                          setManagementDetails((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
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
              onClick={() =>
                setQualityControlInchargeDetails((prev) => [
                  ...prev,
                  { name: "", designation: "" },
                ])
              }
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
                {qualityControlInchargeDetails.map((row, index) => (
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
                        onChange={(event) => {
                          const value = event.target.value;
                          setQualityControlInchargeDetails((prev) =>
                            prev.map((item, i) =>
                              i === index ? { ...item, name: value } : item
                            )
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <input
                        type="text"
                        placeholder="Enter Designation"
                        className="w-full min-w-0 rounded-lg border px-3 py-2.5 text-sm placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        required
                        value={row.designation}
                        onChange={(event) => {
                          const value = event.target.value;
                          setQualityControlInchargeDetails((prev) =>
                            prev.map((item, i) =>
                              i === index
                                ? { ...item, designation: value }
                                : item
                            )
                          );
                        }}
                      />
                    </TableCell>
                    <TableCell className="pl-2 pr-4 py-2.5 align-middle">
                      <button
                        type="button"
                        disabled={qualityControlInchargeDetails.length === 1}
                        onClick={() =>
                          setQualityControlInchargeDetails((prev) =>
                            prev.filter((_, i) => i !== index)
                          )
                        }
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
              />
            </div>
          </div>
        </div>

        {/* Sector Details */}
        <div className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-4">
          <div className="text-base font-medium text-neutral-900">Sector</div>
          <RadioGroup defaultValue="public" className="flex gap-4">
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
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit / Navigation Buttons */}
        <div>
          <button
            type="button"
            className="w-full px-6 py-2.5 rounded-lg bg-neutral-900 text-white text-base font-medium hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default ApplicationForm;
