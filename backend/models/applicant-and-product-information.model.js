import mongoose from "mongoose";

const applicantAndProductInformationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    indianStandard: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    contactPersonName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },
    countryName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const ApplicantAndProductInformation = mongoose.model(
  "ApplicantAndProductInformation",
  applicantAndProductInformationSchema
);
