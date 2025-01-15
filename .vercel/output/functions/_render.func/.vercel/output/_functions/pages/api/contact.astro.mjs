import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

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

function validateContactFormData(data) {
  return typeof data.firstName === "string" && typeof data.lastName === "string" && typeof data.email === "string" && typeof data.phone === "string" && typeof data.message === "string";
}
async function POST({ request }) {
  try {
    const body = await request.json();
    if (!validateContactFormData(body)) {
      console.log("Datos invC!lidos recibidos:", body);
      return new Response(
        JSON.stringify({ success: false, error: "Invalid data format" }),
        { status: 400 }
      );
    }
    console.log("Datos vC!lidos recibidos en el backend:", body);
    await sendMail(body);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error en el backend:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
