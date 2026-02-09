import moongoose from "mongoose"

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String,
    },
    city:
    {
        type: String,
        reqired: true
    },
    pincode: {
        type: String,
        required: true,
    },
    specializedIn: [
        {
            type: String
        }
    ]


},{timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)