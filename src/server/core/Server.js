import ServerConfig from '../config/ServerConfig.js';
import Express, { Router } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import Winston from 'winston';
import morgan from 'morgan';
import { handleCaching } from '../utils/Caching';
import { handleRender } from '../utils/ServerRendering';
import { handleError } from '../utils/ErrorHandling';

//Get express and router instances..
//const router = Router();
const app = Express();

//Define what the app will use..
if (process.env.NODE_ENV === 'production') {
    app.use(compression({ level: 9, memLevel: 9 }));
} else {
    app.use(morgan('dev'));
}

app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
app.use(Express.static(ServerConfig.PUBLIC_STATIC_CONTENT_DIR));
//app.use("/api/v1", router);

app.use(handleCaching);
app.use(handleRender);
app.use(handleError);

app.listen(ServerConfig.PORT, ServerConfig.IP_ADDRESS, () => {
    Winston.log("info", "Node server listening @ " + ServerConfig.PORT);
});

//TODO JS: Fix contact data send with NodeMailer
//router.get("/contact", (request, response) => {
//    var mailOptions = {
//        from: '"Contact" <contact@blackbox-vision.io>', // sender address
//        to: 'contact@blackbox-vision.io', // list of receivers
//        subject: 'Pruebita', // Subject line
//        text: 'Esto es una prueba' // plaintext body
//    };
//
//    var smtpConfig = {
//        host: 'mail.privateemail.com',
//        port: 25,
//        secure: false, // use SSL
//        auth: {
//            user: 'contact@blackbox-vision.io',
//            pass: 'blackbox123.0'
//        }
//    };
//
//    //Create transporter with SMTPS current data taken from ServerConfig.
//    let transporter = nodemailer.createTransport(smtpConfig);
//
//    transporter.verify((error, success) => {
//        if (error) {
//            response.status(500).json({ message: "cannot send email " + error });
//            console.log(error);
//        }
//
//        if (success) {
//            transporter.sendMail(mailOptions, (error, info) => {
//                if(error) {
//                    response.status(550).send(error);
//                }
//
//                response.status(200).end(info.response);
//            });
//        }
//    });
//});

export default app;