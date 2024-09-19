const mercadopago = require('mercadopago');
require('dotenv').config();


const client = new mercadopago.MercadoPagoConfig({ 
    accessToken:  process.env.TOKEN_MERCADO_PAGO_TEST  
    // accessToken: process.env.TOKEN_MERCADO_PAGO_PROD
  })
  
const payment = new mercadopago.Payment(client);

module.exports = payment