import { ApplicationForm } from "../models/application-form.model.js";

export const createApplicationForm = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unable to identify user from authentication token.",
      });
    }

    const {
      fullNameOfFirm,
      // Office
      officeAddress,
      officeTelephone,
      officeFax,
      officeEmail,
      officeVillageCity,
      officeDistrict,
      officeState,
      officeCountry,
      officePinCode,
      // Factory
      factoryAddress,
      factoryTelephone,
      factoryFax,
      factoryEmail,
      factoryVillageCity,
      factoryDistrict,
      factoryState,
      factoryCountry,
      factoryPinCode,
      // Dynamic rows
      managementDetails,
      qualityControlInchargeDetails,
      // Contact
      contactName,
      contactTelephone,
      contactEmail,
      // Sector
      sector,
      // Indian Standard
      indianStandardIS,
      indianStandardPart,
      indianStandardSec,
      indianStandardYear,
      // Production
      unitsOfProduction,
      presentInstalledCapacity,
      productionQuantity,
      productionValue,
      // Fee
      feeAmount,
      feeInvoiceNo,
      feeDate,
    } = req.body;

    if (
      !fullNameOfFirm ||
      !officeAddress ||
      !officeTelephone ||
      !officeFax ||
      !officeEmail ||
      !officeVillageCity ||
      !officeDistrict ||
      !officeState ||
      !officeCountry ||
      !officePinCode ||
      !factoryAddress ||
      !factoryTelephone ||
      !factoryFax ||
      !factoryEmail ||
      !factoryVillageCity ||
      !factoryDistrict ||
      !factoryState ||
      !factoryCountry ||
      !factoryPinCode ||
      !Array.isArray(managementDetails) ||
      managementDetails.length === 0 ||
      !Array.isArray(qualityControlInchargeDetails) ||
      qualityControlInchargeDetails.length === 0 ||
      !contactName ||
      !contactTelephone ||
      !contactEmail ||
      !sector ||
      !indianStandardIS ||
      !indianStandardPart ||
      !indianStandardSec ||
      !indianStandardYear ||
      !unitsOfProduction ||
      !presentInstalledCapacity ||
      !productionQuantity ||
      !productionValue ||
      !feeAmount ||
      !feeInvoiceNo ||
      !feeDate
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const document = await ApplicationForm.create({
      userId,
      fullNameOfFirm: fullNameOfFirm.trim(),
      officeAddress: officeAddress.trim(),
      officeTelephone: officeTelephone.trim(),
      officeFax: officeFax.trim(),
      officeEmail: officeEmail.toLowerCase().trim(),
      officeVillageCity: officeVillageCity.trim(),
      officeDistrict: officeDistrict.trim(),
      officeState: officeState.trim(),
      officeCountry: officeCountry.trim(),
      officePinCode: officePinCode.trim(),
      factoryAddress: factoryAddress.trim(),
      factoryTelephone: factoryTelephone.trim(),
      factoryFax: factoryFax.trim(),
      factoryEmail: factoryEmail.toLowerCase().trim(),
      factoryVillageCity: factoryVillageCity.trim(),
      factoryDistrict: factoryDistrict.trim(),
      factoryState: factoryState.trim(),
      factoryCountry: factoryCountry.trim(),
      factoryPinCode: factoryPinCode.trim(),
      managementDetails: managementDetails.map((item) => ({
        name: item.name?.trim(),
        designation: item.designation?.trim(),
      })),
      qualityControlInchargeDetails: qualityControlInchargeDetails.map(
        (item) => ({
          name: item.name?.trim(),
          designation: item.designation?.trim(),
        })
      ),
      contactName: contactName.trim(),
      contactTelephone: contactTelephone.trim(),
      contactEmail: contactEmail.toLowerCase().trim(),
      sector: sector.trim(),
      indianStandardIS: indianStandardIS.trim(),
      indianStandardPart: indianStandardPart.trim(),
      indianStandardSec: indianStandardSec.trim(),
      indianStandardYear: indianStandardYear.trim(),
      unitsOfProduction: unitsOfProduction.trim(),
      presentInstalledCapacity: presentInstalledCapacity.trim(),
      productionQuantity: productionQuantity.trim(),
      productionValue: productionValue.trim(),
      feeAmount: feeAmount.trim(),
      feeInvoiceNo: feeInvoiceNo.trim(),
      feeDate: new Date(feeDate),
    });

    return res.status(201).json({
      success: true,
      message: "Application Form saved successfully.",
      data: {
        id: document._id,
        fullNameOfFirm: document.fullNameOfFirm,
        officeAddress: document.officeAddress,
        officeTelephone: document.officeTelephone,
        officeFax: document.officeFax,
        officeEmail: document.officeEmail,
        officeVillageCity: document.officeVillageCity,
        officeDistrict: document.officeDistrict,
        officeState: document.officeState,
        officeCountry: document.officeCountry,
        officePinCode: document.officePinCode,
        factoryAddress: document.factoryAddress,
        factoryTelephone: document.factoryTelephone,
        factoryFax: document.factoryFax,
        factoryEmail: document.factoryEmail,
        factoryVillageCity: document.factoryVillageCity,
        factoryDistrict: document.factoryDistrict,
        factoryState: document.factoryState,
        factoryCountry: document.factoryCountry,
        factoryPinCode: document.factoryPinCode,
        managementDetails: document.managementDetails,
        qualityControlInchargeDetails: document.qualityControlInchargeDetails,
        contactName: document.contactName,
        contactTelephone: document.contactTelephone,
        contactEmail: document.contactEmail,
        sector: document.sector,
        indianStandardIS: document.indianStandardIS,
        indianStandardPart: document.indianStandardPart,
        indianStandardSec: document.indianStandardSec,
        indianStandardYear: document.indianStandardYear,
        unitsOfProduction: document.unitsOfProduction,
        presentInstalledCapacity: document.presentInstalledCapacity,
        productionQuantity: document.productionQuantity,
        productionValue: document.productionValue,
        feeAmount: document.feeAmount,
        feeInvoiceNo: document.feeInvoiceNo,
        feeDate: document.feeDate,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        "Server error while saving Application Form. Please try again.",
    });
  }
};

export const getApplicationForm = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unable to identify user from authentication token.",
      });
    }

    const document = await ApplicationForm.findOne({ userId });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Application Form not found for this user.",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: document._id,
        fullNameOfFirm: document.fullNameOfFirm,
        officeAddress: document.officeAddress,
        officeTelephone: document.officeTelephone,
        officeFax: document.officeFax,
        officeEmail: document.officeEmail,
        officeVillageCity: document.officeVillageCity,
        officeDistrict: document.officeDistrict,
        officeState: document.officeState,
        officeCountry: document.officeCountry,
        officePinCode: document.officePinCode,
        factoryAddress: document.factoryAddress,
        factoryTelephone: document.factoryTelephone,
        factoryFax: document.factoryFax,
        factoryEmail: document.factoryEmail,
        factoryVillageCity: document.factoryVillageCity,
        factoryDistrict: document.factoryDistrict,
        factoryState: document.factoryState,
        factoryCountry: document.factoryCountry,
        factoryPinCode: document.factoryPinCode,
        managementDetails: document.managementDetails,
        qualityControlInchargeDetails: document.qualityControlInchargeDetails,
        contactName: document.contactName,
        contactTelephone: document.contactTelephone,
        contactEmail: document.contactEmail,
        sector: document.sector,
        indianStandardIS: document.indianStandardIS,
        indianStandardPart: document.indianStandardPart,
        indianStandardSec: document.indianStandardSec,
        indianStandardYear: document.indianStandardYear,
        unitsOfProduction: document.unitsOfProduction,
        presentInstalledCapacity: document.presentInstalledCapacity,
        productionQuantity: document.productionQuantity,
        productionValue: document.productionValue,
        feeAmount: document.feeAmount,
        feeInvoiceNo: document.feeInvoiceNo,
        feeDate: document.feeDate,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message:
        "Server error while fetching Application Form. Please try again.",
    });
  }
};

