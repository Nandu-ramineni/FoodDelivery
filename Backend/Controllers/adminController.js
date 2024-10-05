import Admin from '../Models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
export const AuthenticateAdmin = async (req, res) => {
	try {
		const { username, password } = req.body;
		const admin = await Admin.findOne({ username });
		console.log(admin);
		if (!admin) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}
		const isPasswordValid = await bcrypt.compare(password, admin.password);
		// if (!isPasswordValid) {
		// 	return res.status(400).json({ message: 'Invalid credentials' });
		// }
		const token = jwt.sign({ adminId: admin._id }, process.env.jwt_secret, {
			expiresIn: '2d',
		});
		const adminId = admin._id;
		const userName = admin.username;
		return res.status(200).json({
			message: 'admin logged in successfully',
			token,
			adminId,
			username,
		});
	} catch (error) {
		console.error('Error authenticating admin:', error);
		res.status(500).json({ message: 'Something went wrong' });
	}
};
// export const updateAdmin = async (req, res, next) => {
// 	try {
// 		const { password } = req.body;
// 		const admin = await Admin.findById(req.userId);
// 		if (!admin) {
// 			return res.status(400).json({ message: 'Admin Not Found' });
// 		}
// 		const hashedPassword = await bcryptjs.hash(password, 10);
// 		updatedUser = await Admin.findByIdAndUpdate(
// 			admin._id,
// 			{
// 				$set: {
// 					password: hashedPassword,
// 				},
// 			},
// 			{
// 				new: true,
// 			},
// 		);
// 		res.status(200).json({ message: 'Admin Password Updated SuccessFully' });
// 	} catch (error) {}
// };
