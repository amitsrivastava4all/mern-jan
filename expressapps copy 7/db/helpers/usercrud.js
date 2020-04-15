const UserCollection = require('../models/user');
const userOperations ={
    add(userObject){
        var promise = UserCollection.create(userObject);
        return promise;
    },
    search(userObject){
        var pr = new Promise((resolve, reject)=>{
            UserCollection.findOne(userObject,(err,doc)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(doc);
                }
            });
        });
        return pr;
        
    },
    remove(){

    },
    update(){

    }
}
module.exports = userOperations;