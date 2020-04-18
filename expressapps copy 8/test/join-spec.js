// User, Role , Mapping
const usercrud = require('../db/helpers/usercrud');
const rolecrud = require('../db/helpers/rolecrud');
const userrolemappingcrud = require('../db/helpers/userrolecrud');


async function insert(){
    try{
    var obj = await usercrud.add({'userid':'ram','password':'ram12'});
    var obj2 = await rolecrud.add({'rname':'Student','roledesc':'Student Role'});
    var obj3 = await userrolemappingcrud.add({'uid':obj._id,'roleid':obj2._id});
    console.log('All Insertion Done ',obj, obj2,obj3);
    }
    catch(e){
        console.log('DB Error ',e);
    }
}
//insert();
async function find(){
    try{
    var obj = await usercrud.search({'userid':'ram','password':'ram12'});
    var obj2 = await userrolemappingcrud.find({'uid':obj._id});
    console.log('User ',obj);
    console.log('User Role Mapping ',obj2);
    }
    catch(e){
        console.log('Error in Find ',e);
    }

}
find();

// var promise = usercrud.add({'userid':'amit','password':'am12'});

// promise.then(data=>console.log('User Added ',data)).catch(err=>console.log('Error in User add '));
// var promise2 = rolecrud.add({'rname':'Teacher','roledesc':'Teacher Role'});
// promise2.then(data=>console.log('Role Added ',data)).catch(err=>console.log('Error in Role add '));