var Mailgen = require('mailgen');
var path = require('path');
var link = 'https://dxpress.cl/';

// Configure mailgen by setting a theme and your product info
var mailGenerator = new Mailgen({
    theme: {
        path: path.resolve('themes/dxpress-table/index.html'),
        plaintextPath: path.resolve('themes/dxpress-table/index.txt')
    },
    product: {
        name: 'Dxpress',
        link: link,
        logo: 'https://storage.googleapis.com/dxpress/email-logo.png',
        footerImage: 'https://storage.googleapis.com/dxpress/app-mobiles.png',
        text: 'La forma inteligente de pedir comida!!'
    }
});

// Prepare email contents
var email = {
    body: {
        intro: ['DESGLOSE DEL PEDIDOD REALIZADO'],
        middle: ['Pedido #AAAA04', 'Monto total $ 57.000'],
        another: ['Detalle de su pedido', 'Hora del pedido 00:00:00', 'Código de entrega: xxxxxx'],
        outro: ['¡Gracias por user Dxpress!'],
        table: {
            data: [
                {
                    item: 'Node.js',
                    description: 'Event-driven I/O server-side JavaScript environment based on V8.',
                    price: '$10.99'
                },
                {
                    item: 'Mailgen',
                    description: 'Programmatically create beautiful e-mails using plain old JavaScript.',
                    price: '$1.99'
                }
            ],
            columns: {
                // Optionally, customize the column widths
                customWidth: {
                    item: '20%',
                    price: '15%'
                },
                // Optionally, change column text alignment
                customAlignment: {
                    price: 'right'
                }
            }
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