import { ApplicantAndProductInformation } from "../models/applicant-and-product-information.model.js";

export const createApplicantAndProductInformation = async (req, res) => {
  try {
    const {
      indianStandard,
      productName,
      contactPersonName,
      email,
      phoneNumber,
      countryName,
      address,
    } = req.body;

    if (
      !indianStandard ||
      !productName ||
      !contactPersonName ||
      !email ||
      !phoneNumber ||
      !countryName ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const document = await ApplicantAndProductInformation.create({
      indianStandard: indianStandard.trim(),
      productName: productName.trim(),
      contactPersonName: contactPersonName.trim(),
      email: email.toLowerCase().trim(),
      phoneNumber: phoneNumber.trim(),
      countryName: countryName.trim(),
      address: address.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Applicant & Product Information saved successfully.",
      data: {
        id: document._id,
        indianStandard: document.indianStandard,
        productName: document.productName,
        contactPersonName: document.contactPersonName,
        email: document.email,
        phoneNumber: document.phoneNumber,
        countryName: document.countryName,
        address: document.address,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        "Server error while saving Applicant & Product Information. Please try again.",
    });
  }
}

