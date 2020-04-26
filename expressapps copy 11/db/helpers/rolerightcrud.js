const RoleRightMappingCollection = require('../models/rolerightmapping');
const roleRightOperations ={
    add(roleRightObject){
        var promise = RoleRightMappingCollection.create(roleRightObject);
        return promise;
    },
    find(roleRightObject){
      var promise =  RoleRightMappingCollection.
       findOne(roleRightObject)
       .populate('rightid');    
       return promise;
    }
    
    
}
module.exports = roleRightOperations;