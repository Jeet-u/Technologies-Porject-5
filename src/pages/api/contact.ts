import sendMail from '../../../sendEmail';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

function validateContactFormData(data: any): data is ContactFormData {
  return (
    typeof data.firstName === 'string' &&
    typeof data.lastName === 'string' &&
    typeof data.email === 'string' &&
    typeof data.phone === 'string' &&
    typeof data.message === 'string'
  );
}

export async function POST({ request }: { request: Request }): Promise<Response> {
  try {
    const body = await request.json();

    if (!validateContactFormData(body)) {
      console.log('Datos invC!lidos recibidos:', body); // Log para datos no vC!lidos
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid data format' }),
        { status: 400 }
      );
    }

    console.log('Datos vC!lidos recibidos en el backend:', body);

    await sendMail(body);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error en el backend:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}
