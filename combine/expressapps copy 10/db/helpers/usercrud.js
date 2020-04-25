const UserCollection = require('../models/user');
const userrolemappingcrud = require('./userrolecrud');
const rolerightmappingcrud = require('./rolerightcrud');
const userOperations ={
    add(userObject){
        var promise = UserCollection.create(userObject);
        return promise;
    },
    async search(userObject){

        var result = await UserCollection.findOne(userObject);
        try{
        if(result){
            console.log(':::::::: Result is :::::: ',result);
            var obj2 = await userrolemappingcrud.find({'uid':result._id});
            console.log('Obj2 is ################### ',obj2);
            var obj3 = await rolerightmappingcrud.find({roleid:obj2.roleid._id});
            var userObject2 = {
                'userid':result.userid,
                'rolename':obj2.roleid.rname,
                'rights':obj3
            };
            console.log(':::::::::: FInal UserObject ',userObject2);
            return userObject2;
            //return result
        }
        else{
            return null;
        }
    }
    catch(e){
        console.log('Error is' ,e);
        return e;
    }
    return null;
        //var obj = await usercrud.search({'userid':'ram','password':'ram12'});
    //var obj2 = await userrolemappingcrud.find({'uid':obj._id});

        /*
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
        */
        
    },
    remove(){

    },
    update(){

    }
}
module.exports = userOperations;