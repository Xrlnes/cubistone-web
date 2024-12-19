// pages/api/payments/create.js
import fetch from 'node-fetch';

const TEBEX_API_BASE_URL = 'https://plugin.tebex.io/payments';
const TEBEX_SECRET_KEY = process.env.TEBEX_SECRET_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { package_id, username } = req.body;

    if (!package_id || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const response = await fetch(`${TEBEX_API_BASE_URL}/create`, {
      method: 'POST',
      headers: {
        'X-Tebex-Secret': TEBEX_SECRET_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        package_id,
        username,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Payment creation error:', error);
    return res.status(500).json({ error: 'Failed to create payment' });
  }
}