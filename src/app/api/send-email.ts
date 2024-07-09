// src/app/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  nome: string;
  empresa: string;
  funcionarios: string;
  celular: string;
  email: string;
  mais: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const formData: FormData = req.body;
    
    // Aqui você pode implementar a lógica para enviar o email
    
    // Exemplo simples de resposta de sucesso
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } else {
    // Método não suportado
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido. Use POST.`);
  }
}
