import mongoose, {Schema} from 'mongoose';

const thematicSchema = new Schema({
    nameThematic:{
        type: String,
        require: [true, 'Thematic is required'],
        unique:true
    },
    permissions:{
        type: [String]
    }
})

export const ThematicModel = mongoose.model('Thematic', thematicSchema);
