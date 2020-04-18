const connection= require('../../utils/connection');
var Schema = connection.Schema;
var RightSchema = new Schema({
    'rightname':{type:String, required:true},
    'rightdesc':{type:String, required:true},
    'url':{type:String, required:true},
    'status':{type:String,default:'A'},
    
});

const RightCollection = connection.model('rights',RightSchema);
module.exports = RightCollection;