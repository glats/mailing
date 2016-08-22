var Mailgen = require('mailgen');
var path = require('path');
var link = 'https://dxpress.cl/';

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: {
        path: path.resolve('themes/dxpress-coupon/index.html'),
        plaintextPath: path.resolve('themes/dxpress-coupon/index.txt')
    },
    product: {
        name: 'Dxpress',
        link: link,
        logo: 'https://storage.googleapis.com/dxpress/email-logo.png',
        backgroundImage: 'https://storage.googleapis.com/dxpress/image-seal-pizza.png',
        text_header: ['{{ coupon }}', '{{ description }}'],
        text_footer: ['SEGUIMIENTO DE TU REPARTIDOR - INFORMACIÓN DE CADA PROCESO', 'VARIEDAD DE RESTAURANTES - SISTEMA SEGURO', 'Son algunas de las cosas que te podemos ofrecer'],
    }
});

// Prepare email contents
var email = {
    body: {
        intro: ['LA NUEVA FORMA DE PEDIR COMIDA', 'Somos <b>Dxpress</b> y llevamos al comida a la puerta de tu casa <b>informándote</b> en cada', 'momento en qué proceso se encuentra tu pedido, para que de esta forma puedas saber', 'incluso, <b>donde viene tu comida</b>'],
    }
};

// Generate an HTML email with the provided contents
var emailBody = mailGenerator.generate(email);

// Generate the plaintext version of the e-mail (for clients that do not support HTML)
var emailText = mailGenerator.generatePlaintext(email);

// Optionally, preview the generated HTML e-mail by writing it to a local file
require('fs').writeFileSync('index.html', emailBody, 'utf8');

// `emailBody` now contains the HTML body,
// and `emailText` contains the textual version.
//
// It's up to you to send the e-mail.
// Check out nodemailer to accomplish this:
// https://nodemailer.com/

// Send the e-mail with your favorite mailer
// transporter.sendMail({
//     from: 'no-reply@mailgen.js',
//     to: 'target@email.com',
//     subject: 'Mailgen',
//     html: emailBody,
//     text: emailText,
// }, function (err) {
//     if (err) return console.log(err);
//     console.log('Message sent successfully.');
// });