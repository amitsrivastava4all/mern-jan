// User, Role , Mapping
const usercrud = require('../db/helpers/usercrud');
const rolecrud = require('../db/helpers/rolecrud');
const userrolemappingcrud = require('../db/helpers/userrolecrud');
const rolerightmappingcrud = require('../db/helpers/rolerightcrud');
const rightcrud = require('../db/helpers/rightcrud');

async function insert(){
    try{
    //var obj = await usercrud.add({'userid':'ram','password':'ram12'});
    //var obj2 = await rolecrud.add({'rname':'Student','roledesc':'Student Role'});
    //var obj3 = await userrolemappingcrud.add({'uid':obj._id,'roleid':obj2._id});
    // Right Add
    /*
     'rightname':{type:String, required:true},
    'rightdesc':{type:String, required:true},
    'url':{type:String, required:true},
    'status':{type:String,default:'A'},
    */
    var obj4 = await rightcrud.add({'rightname':'Exam Take',
    'rightdesc':'Teacher can assign the exam','url':'/exam'});
    var obj5 = await rightcrud.add({'rightname':'See All Scores',
    'rightdesc':'Teacher can See All Scores','url':'/scores'});
    // Right Mapping
    /*
    'rightid':{type:Schema.Types.ObjectId, ref:'rights',required:true},
    'roleid':{type:Schema.Types.ObjectId,ref:'roles', required:true},
    */
     var obj6= await rolerightmappingcrud.add({rightid:obj4._id,roleid:'5e9a669b5995a745fb2ffaf1'}) ;
     var obj7= await rolerightmappingcrud.add({rightid:obj5._id,roleid:'5e9a669b5995a745fb2ffaf1'})   
    console.log('All Insertion Done ',obj4, obj5, obj6, obj7);
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
    console.log('ROLE Id ', obj2.roleid._id);

    var obj3 = await rolerightmappingcrud.find({roleid:obj2.roleid._id});
    console.log('Obj3 RIGHTS INFO  ',obj3);
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