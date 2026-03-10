import userModel from "../../models/userModels";

export const findUserByEmailOrMobile = async (email: string, mobile: string) => {
    return await userModel.findOne({
        $or: [{ email }, { mobile }]
    });
};

export const createUser = async (
    username: string,
    email: string,
    mobile: string,
    password: string
) => {
    const newUser = await userModel.create({
        username,
        email,
        mobile,
        password
    });

    return newUser;
};


export const findUserByIdentifier = async (identifier: string) => {
    const user = await userModel.findOne({
        $or: [
            { username: identifier },
            { email: identifier },
            { mobile: identifier }
        ]
    });

    return user;
};