const connection= require('../../utils/connection');
var Schema = connection.Schema;
var UserSchema = new Schema({
    'userid':{type:String, required:true},
    'password':{type:String, required:true}//,
    // 'address':{},
    // 'jobs':[]
});
// var UserSchema = new Schema({
   
// });
// var UserSchema = new Schema({
//     'userid':{type:String,required:true,unique:true},
//     'password':{type:String,required:true}
// });
// this line create collection
const UserCollection = connection.model('users',UserSchema);
module.exports = UserCollection;