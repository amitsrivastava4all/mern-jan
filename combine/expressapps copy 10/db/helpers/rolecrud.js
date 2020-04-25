const RoleCollection = require('../models/role');
const roleOperations ={
    add(roleObject){
        var promise = RoleCollection.create(roleObject);
        return promise;
    },
    
    
}
module.exports = roleOperations;