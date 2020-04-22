const UserRoleMappingCollection = require('../models/userrolemapping');
const userRoleMappingOperations ={
    add(userRoleObject){
        var promise = UserRoleMappingCollection.create(userRoleObject);
        return promise;
    },
    find(userRoleObject){
        console.log('I am in User Role Find ',userRoleObject);
      var promise =  UserRoleMappingCollection.
       findOne(userRoleObject)
       .populate('roleid');    
       return promise;
    }
    
    
}
module.exports = userRoleMappingOperations;