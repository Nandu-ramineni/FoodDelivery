import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', required: true 
    },
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    fullName: { 
        type: String, 
        required: true 
    },
    mobileNumber: { 
        type: String, 
        required: true 
    },
    pinCode: { 
        type: String, 
        required: true 
    },
    locality: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    state: { 
        type: String, 
        required: true 
    },
    landmark: { 
        type: String 
    },
    alternatePhone: { 
        type: String 
    }
})

export const Address =new mongoose.model('Address', addressSchema);