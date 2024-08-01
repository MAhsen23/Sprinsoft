import mongoose from "mongoose";
const contactDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamp: true,
})


const Contact = mongoose.models.Contact || mongoose.model('Contact', contactDetailsSchema)
export default Contact;