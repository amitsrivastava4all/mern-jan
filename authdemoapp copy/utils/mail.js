const nodemailer = require('nodemailer');
function sendMail(to, subject, msg){
    const obj = {user:'ur userid',password:'ur password'};
    nodemailer.createTestAccount((err,account)=>{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            
           
            auth:{
                user:obj.user,
                pass:obj.password,

            }
        });
        const mailOptions = {
            from:'yourmail@gmail.com',
            to:to,
            subject:subject,
            text:msg
        }
        transporter.sendMail(mailOptions,function(err,info){
            if(err){
                console.log('Mail Not Send It Due to Some Error ',err);
            }
            else{
                console.log('Mail Has Been Send It ');
            }
        })
    })

}
module.exports = sendMail;
