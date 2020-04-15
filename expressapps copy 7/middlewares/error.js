const error = (req,res,next)=>{
    const path = require('path');
    const p1 = path.normalize(__dirname+'/..');
    const fullPath = path.join(p1,'/public/error.html');
   // res.sendFile(fullPath);
    res.status(404).sendFile(fullPath);
};
module.exports = error;