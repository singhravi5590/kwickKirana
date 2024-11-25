import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.RESEND_API){
    console.log("Please provide Resend api");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({sendTo, subject, html}) => {
    try {
        const {data, error} = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: sendTo,
            subject: subject,
            html: html
        })
        if(error){
            return console.log({error});
        }
        return data;
    } 
    catch (error) {
        console.log("hello", error);
    }
}


export default sendEmail;