const connection= require('../../utils/connection');
var Schema = connection.Schema;
var UserSchema = new Schema({
    'userid':{type:String,required:true,unique:true},
    'password':{type:String,required:true}
});
const UserCollection = connection.model('users',UserSchema);
module.exports = UserCollection;