import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextResponse } from 'next/server';

const sesClient = new SESClient({
  region: process.env.AWS_REGION || 'us-east-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validar campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    const emailFrom = process.env.EMAIL_FROM || 'no-reply@nexushglobal.com';

    // Configurar el comando de envío
    const command = new SendEmailCommand({
      Source: emailFrom,
      Destination: {
        ToAddresses: [process.env.EMAIL_TO || "softwaretoni21@gmail.com"],
      },
      Message: {
        Subject: {
          Data: `Nuevo mensaje de contacto de ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: `
              <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #4F46E5; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
                      Nuevo mensaje de contacto
                    </h2>

                    <div style="margin: 20px 0;">
                      <p style="margin: 10px 0;">
                        <strong style="color: #555;">Nombre:</strong> ${name}
                      </p>
                      <p style="margin: 10px 0;">
                        <strong style="color: #555;">Email:</strong>
                        <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
                      </p>
                    </div>

                    <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; margin: 20px 0;">
                      <h3 style="margin-top: 0; color: #555;">Mensaje:</h3>
                      <p style="white-space: pre-wrap;">${message}</p>
                    </div>

                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #888;">
                      <p>Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de tu portafolio web.
            `,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: [email],
    });

    // Enviar el email
    await sesClient.send(command);

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
