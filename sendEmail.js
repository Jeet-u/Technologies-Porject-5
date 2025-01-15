import nodemailer from 'nodemailer';
import 'dotenv/config';

const sendMail = async ({ firstName, lastName, email, phone, message }) => {
  console.log("Datos recibidos para enviar correo:", {
    firstName, lastName, email, phone, message
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
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
