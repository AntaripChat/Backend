const mail = require('nodemailer');

const sendEmail= async (email,subject,html) =>{
    let mailT = mail.createTransport({
        service:'gmail',
        //host:'smtp.gmail.com',

        auth:{
            user:"bongcoding@gmail.com",
            pass:"kcytpuwgsvfdbyrm",
        }
    });
    let mailDetails = {
        from: "bongcoding@gmail.com",
        to:email,
        subject,
        html,
    };

    await mailT.sendMail(mailDetails,(err,data)=>{
        if(err){
            console.log("Unable to send email",err);
        }else{
            console.log("Email send suss");
        }
    });
};

module.exports = {
    sendEmail
}