const UserRoleMappingCollection = require('../models/userrolemapping');
const userRoleMappingOperations ={
    add(userRoleObject){
        var promise = UserRoleMappingCollection.create(userRoleObject);
        return promise;
    },
    find(userRoleObject){
      var promise =  UserRoleMappingCollection.
       findOne(userRoleObject)
       .populate('roleid');    
       return promise;
    }
    
    
}
module.exports = userRoleMappingOperations;