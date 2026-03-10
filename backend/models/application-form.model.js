import mongoose from "mongoose";

const { Schema } = mongoose;

const personWithDesignationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const applicationFormSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Full Name of Firm
    fullNameOfFirm: {
      type: String,
      required: true,
      trim: true,
    },

    // Office details
    officeAddress: {
      type: String,
      required: true,
      trim: true,
    },
    officeTelephone: {
      type: String,
      required: true,
      trim: true,
    },
    officeFax: {
      type: String,
      required: true,
      trim: true,
    },
    officeEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    officeVillageCity: {
      type: String,
      required: true,
      trim: true,
    },
    officeDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    officeState: {
      type: String,
      required: true,
      trim: true,
    },
    officeCountry: {
      type: String,
      required: true,
      trim: true,
    },
    officePinCode: {
      type: String,
      required: true,
      trim: true,
    },

    // Factory details
    factoryAddress: {
      type: String,
      required: true,
      trim: true,
    },
    factoryTelephone: {
      type: String,
      required: true,
      trim: true,
    },
    factoryFax: {
      type: String,
      required: true,
      trim: true,
    },
    factoryEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    factoryVillageCity: {
      type: String,
      required: true,
      trim: true,
    },
    factoryDistrict: {
      type: String,
      required: true,
      trim: true,
    },
    factoryState: {
      type: String,
      required: true,
      trim: true,
    },
    factoryCountry: {
      type: String,
      required: true,
      trim: true,
    },
    factoryPinCode: {
      type: String,
      required: true,
      trim: true,
    },

    // Management details (dynamic rows)
    managementDetails: {
      type: [personWithDesignationSchema],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "At least one management detail is required.",
      },
      required: true,
    },

    // Quality Control Incharge details (dynamic rows)
    qualityControlInchargeDetails: {
      type: [personWithDesignationSchema],
      validate: {
        validator: (arr) => Array.isArray(arr) && arr.length > 0,
        message: "At least one Quality Control Incharge detail is required.",
      },
      required: true,
    },

    // Contact person
    contactName: {
      type: String,
      required: true,
      trim: true,
    },
    contactTelephone: {
      type: String,
      required: true,
      trim: true,
    },
    contactEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    // Sector (public / private)
    sector: {
      type: String,
      enum: ["public", "private"],
      required: true,
      trim: true,
    },

    // Indian Standard details
    indianStandardIS: {
      type: String,
      required: true,
      trim: true,
    },
    indianStandardPart: {
      type: String,
      required: true,
      trim: true,
    },
    indianStandardSec: {
      type: String,
      required: true,
      trim: true,
    },
    indianStandardYear: {
      type: String,
      required: true,
      trim: true,
    },

    // Production details
    unitsOfProduction: {
      type: String,
      required: true,
      trim: true,
    },
    presentInstalledCapacity: {
      type: String,
      required: true,
      trim: true,
    },
    productionQuantity: {
      type: String,
      required: true,
      trim: true,
    },
    productionValue: {
      type: String,
      required: true,
      trim: true,
    },

    // Fee details
    feeAmount: {
      type: String,
      required: true,
      trim: true,
    },
    feeInvoiceNo: {
      type: String,
      required: true,
      trim: true,
    },
    feeDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const ApplicationForm = mongoose.model(
  "ApplicationForm",
  applicationFormSchema
);
