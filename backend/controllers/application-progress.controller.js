import { ApplicantAndProductInformation } from "../models/applicant-and-product-information.model.js";
import { ApplicationForm } from "../models/application-form.model.js";

export const checkApplicationProgress = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unable to identify user from authentication token.",
      });
    }

    const applicantAndProductInformation =
      await ApplicantAndProductInformation.findOne({ userId });
    const applicationForm = await ApplicationForm.findOne({ userId });

    const applicantFormFilled = applicantAndProductInformation ? true : false;
    const applicationFormFilled = applicationForm ? true : false;

    return res.status(200).json({
      success: true,
      data: {
        applicantFormFilled,
        applicationFormFilled,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        "Server error while checking application progress. Please try again.",
    });
  }
};
