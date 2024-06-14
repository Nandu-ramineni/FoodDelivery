import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    password: {
        type: String,
        required: true,
    }
});

adminSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        try {
            const hashedPassword = await bcrypt.hash(this.password, 10); 
            this.password = hashedPassword;
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
