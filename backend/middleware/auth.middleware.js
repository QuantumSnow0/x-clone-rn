export const protectRoute = async (req, res, next) => {
    if(!req.auth().isAuthenticated){
        return res.status(401).json({message: "unathourised - you must be logged in"})
    }
    next()
}