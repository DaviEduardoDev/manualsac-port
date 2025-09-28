// netlify/functions/auth.js

// A senha correta.
const SENHA_CORRETA = 'admin123';

exports.handler = async function(event, context) {
  // O 'event.body' contém os dados enviados pelo nosso frontend.
  let body;
  try {
    // Se o corpo do evento não existir ou estiver vazio, trata como dados inválidos.
    if (!event.body) {
        throw new Error("Corpo da requisição ausente.");
    }
    body = JSON.parse(event.body);
  } catch (e) {
    // Se houver erro ao ler os dados, retorna falha.
    return {
      statusCode: 400, // Bad Request
      body: JSON.stringify({ success: false, message: 'Dados inválidos.' })
    };
  }
  
  const senhaDigitada = body.password;

  // Compara a senha digitada com a senha correta
  if (senhaDigitada === SENHA_CORRETA) {
    // Se a senha estiver correta, retorna sucesso.
    return {
      statusCode: 200, // OK
      body: JSON.stringify({ success: true })
    };
  } else {
    // Se a senha estiver incorreta, retorna falha.
    return {
      statusCode: 401, // Unauthorized
      body: JSON.stringify({ success: false, message: 'Senha incorreta.' })
    };
  }
};