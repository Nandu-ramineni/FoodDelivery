import { Address } from "../Models/Address.js";
export const createAddress = async (req, res) => {
    try {
        const { fullName, mobileNumber, pinCode, locality, address, city, state, landmark, alternatePhone } = req.body;
        const user = req.userId;
        const order = req.orderId;
        const existingAddress = await Address.findOne({ user, order , fullName, mobileNumber, pinCode, locality, address, city, state, landmark, alternatePhone});
        if (existingAddress) {
            return res.status(401).json({ message: 'Address already exists', address: existingAddress });
        }
        const location = new Address({
            user,
            order,
            fullName,
            mobileNumber,
            pinCode,
            locality,
            address,
            city,
            state,
            landmark,
            alternatePhone
        });

        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create address', error: error.message });
    }
};