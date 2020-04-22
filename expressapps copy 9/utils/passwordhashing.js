const bcrypt = require('bcrypt');
const passwordHashing = {
    salt : 10,
    doHash(plainPassword){
        // Recommened
        var promise = bcrypt.hash(plainPassword,this.salt);
        return promise;
        // Block Style
        //let hashPwd =   bcrypt.hashSync(plainPassword,this.salt);
        //return hashPwd;
    },
    compareHash(plainPwd, dbHashPwd){
        var promise =bcrypt.compare(plainPwd,dbHashPwd);
        return promise;
         //   return bcrypt.compareSync(plainPwd, dbHashPwd);
    }
}
module.exports = passwordHashing;
var promise = passwordHashing.doHash('amit');
promise.then(hashPwd =>{
    console.log('hashPwd ',hashPwd);
    var pr = passwordHashing.compareHash('amit',hashPwd);
    pr.then(result=>{
        console.log(result?'Same Pwd ':'Not Same Pwd');
    }).catch(e=>{
        console.log('Error is ',e);
    })
}).catch(err=>{
    console.log('Hash Err ',err);
})
/* Testing Code */
// const dbHash = passwordHashing.doHash('amit');
// //const hash2 = passwordHashing.doHash('amit');

// console.log('Hash is  ',dbHash);
// if(passwordHashing.compareHash('amit',dbHash)){
//     console.log('Same');
// }
// else{
//     console.log('Not Same');
// }
//console.log('Hash2 is ',hash2);