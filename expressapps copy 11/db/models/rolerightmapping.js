const connection= require('../../utils/connection');
const rights = require('./rights');
var Schema = connection.Schema;
var RoleRightMapping = new Schema({
    'rightid':{type:Schema.Types.ObjectId, ref:rights,required:true},
    'roleid':{type:Schema.Types.ObjectId,ref:'roles', required:true},
    'status':{type:String,default:'A'},
    
});

const RoleRightCollection = connection.model('rolerightmappings',RoleRightMapping);
module.exports = RoleRightCollection;