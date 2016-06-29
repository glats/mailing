var Mailgen = require('mailgen');
var path = require('path');
var link = 'https://dxpress.cl/';

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: {
        path: path.resolve('themes/dxpress-active/index.html'),
        plaintextPath: path.resolve('themes/dxpress-active/index.txt')
    },
    product: {
        name: 'Dxpress',
        link: link,
        logo: 'https://storage.googleapis.com/dxpress/email-logo.png',
        fullImage: 'https://storage.googleapis.com/dxpress/image-full.png',
        footerImage: 'https://storage.googleapis.com/dxpress/email-phone-image.png',
        text: 'La forma inteligente de pedir comida!!'
    }
});

// Prepare email contents
var email = {
    body: {
        intro: ['Para activar su cuenta haga click o copie', 'el siguiente enlace en su navegador'],
        outro: ['<a href="' + link + 'rating" target="_blank">' + link + 'rating</a>'],
        goToAction: {
            text: 'Para activar su cuenta haga click o copie el siguiente enlace en su navegador',
            link: link + 'rating'
        }
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