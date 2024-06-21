import mongoose, {Schema} from 'mongoose';

const userSchema = new Schema({
    username:{
        type:String,
        required: [true, 'User name is required'],
        unique: true
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'password is required']
    },
    img:{
        type: String,
    },
    role:{
        type:[String],
        enum:['CREATOR','READER','ADMIN']
    }
})

export const UserModel = mongoose.model('User', userSchema)