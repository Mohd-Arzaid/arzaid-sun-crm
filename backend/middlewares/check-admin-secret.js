export const checkAdminSecret = (req,res,next)=>{
    const secret = req.headers["admin-secret-key"];
    if(!secret || secret !== process.env.ADMIN_SECRET_KEY){
        return res.status(403).json({
            success:false,
            message : "Invalid Admin Secret Key."
        })
    }
    next();
}