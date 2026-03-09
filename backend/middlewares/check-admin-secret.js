export const checkAdminSecret = (req, res, next) => {
  try {
    const secret = req.headers?.["admin-secret-key"]?.trim();

    if (!secret) {
      return res.status(403).json({
        success: false,
        message: "Admin secret key is missing.",
      });
    }

    const validSecret = process.env.ADMIN_SECRET_KEY;

    if (!validSecret) {
      console.error("ADMIN_SECRET_KEY is not configured in environment.");
      return res.status(500).json({
        success: false,
        message: "Server configuration error. Please contact administrator.",
      });
    }

    if (secret !== validSecret) {
      return res.status(403).json({
        success: false,
        message: "Invalid admin secret key.",
      });
    }

    next();
  } catch (error) {
    console.error("Error in checkAdminSecret:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while validating the admin secret.",
    });
  }
};
