var Mailgen = require('mailgen');
var path = require('path');

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: {
        path: path.resolve('themes/dxpress/index.html'),
        plaintextPath: path.resolve('themes/dxpress/index.txt'),
    },
    product: {
        name: 'Dxpress',
        link: 'https://dxpress.cl/',
        path: path.resolve('themes/dxpress/index.html'),
        plaintextPath: path.resolve('themes/dxpress/index.txt'),
        logo: 'images/dxpress-base/logo.png',
        fullImage: 'images/dxpress-base/image-full.png',
        footerImage: 'images/dxpress-base/image-footer.png',
        text: 'La forma inteligente de pedir comida!!'
    }
});

// Prepare email contents
var email = {
    body: {
        intro: ['¡Gracias por usar Dxpress!', '¡La forma inteligente de comprar comida!'],
        outro: ['Ayudanos para ir mejorando cada vez más', 'Califica Al restaurant de tu pedido <a href="#" target="_blank">Click aquí!</a>'],
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