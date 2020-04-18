const connection= require('../../utils/connection');
var Schema = connection.Schema;
var UserRoleMapping = new Schema({
    'uid':{type:Schema.Types.ObjectId, ref:'users',required:true},
    'roleid':{type:Schema.Types.ObjectId,ref:'roles', required:true},
    'status':{type:String,default:'A'},
    
});

const UserRoleCollection = connection.model('userrolemappings',UserRoleMapping);
module.exports = UserRoleCollection;