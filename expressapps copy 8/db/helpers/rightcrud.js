const RightCollection = require('../models/rights');
const rightOperations ={
    add(rightObject){
        var promise = RightCollection.create(rightObject);
        return promise;
    },
    
    
}
module.exports = rightOperations;