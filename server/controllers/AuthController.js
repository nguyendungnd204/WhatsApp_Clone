import getPrismaInstance from "../utils/PrismaClient.js";

export const checkUser = async (req, res, next) => {
    try {
        const {email} = req.body;

        if(!email){
            return res.json(
                {
                    message: "email is requied",
                    status: false
                }       
            )
        }

        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where: {email}});

        if(!user){
            return res.json({
                message: "user not found",
                status: false
            })
        }
        
        return res.json({
            message: "user found",
            status: true,
            data: user
        })
    } catch (error) {
        next(error);
    }
}