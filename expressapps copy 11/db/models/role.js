const connection= require('../../utils/connection');
var Schema = connection.Schema;
var RoleSchema = new Schema({
    'rname':{type:String, required:true},
    'roledesc':{type:String, required:true},
    'status':{type:String,default:'A'},
    
});

const RoleCollection = connection.model('roles',RoleSchema);
module.exports = RoleCollection;