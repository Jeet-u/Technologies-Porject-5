import nodemailer from 'nodemailer';

// FunciC3n para enviar correo
const sendMail = async ({ firstName, lastName, email, phone, message }) => {
  console.log("Datos recibidos para enviar correo:", {
    firstName, lastName, email, phone, message
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,  // Variable de entorno en Vercel
      pass: process.env.GMAIL_PASS,  // Variable de entorno en Vercel
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,  // AquC- se especifica la cuenta de destino
    subject: 'Nuevo mensaje de contacto',
    text: `
      Nombre: ${firstName} ${lastName}
      Correo: ${email}
      TelC)fono: ${phone}
      Mensaje: ${message}
    `,
  };

  try {
    console.log("Enviando correo...");
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado exitosamente!");
  } catch (error) {
    console.error("Error al enviar correo:", error);
  }
};

export default sendMail;
