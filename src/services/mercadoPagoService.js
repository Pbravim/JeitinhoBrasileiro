
const transactionService = require('./transacaoService')
const payment = require('../../config/mercadopago')
class MercadoPagoService
{

    static async createPayment (userId, formData, paymentType, carrinho_id) {
    let options, paymentData = {
        transaction_amount: formData.transaction_amount,
        description: formData.description,
        payer: {
            email: formData.payer.email
        },
        notification_url: "https://webhook.site/5964433e-95d5-4969-83eb-6023f4c9f33b"
        // notification_url: "http://localhost:3010/mercadopago/webhook"
    }
    if (paymentType === "credit_card") {
        paymentData.payment_method_id = formData.payment_method_id;
        paymentData.token = formData.token;
        paymentData.installments = Number(formData.installments);
        paymentData.issuer_id = formData.issuer_id;
        paymentData.payer.identification = {
            type: formData.payer.identification.docType,
            number: formData.payer.identification.docNumber
        }
    }
        //PIX
        if (paymentType === "bank_transfer") {
            paymentData.payment_method_id = formData.payment_method_id
        }
        // if (paymentType === "ticket"){
            //   paymentData.payment_method_id = formData.payment_method_id
        //   paymentData.payer.first_name = formData.payer.first_name
        //   paymentData.payer.last_name = formData.payer.last_name
        //   console.log(formData.payer.address)
        //   console.log(formData.payer.identification)
        // }
        
        try{
        const existingTransaction = await transactionService.findAll( userId);
        
        if (existingTransaction.length > 0) throw new HttpError(409, "Transação ja existente")
            
            const response = await payment.create({body: paymentData})
            
            if(!response) throw new HttpError(500, "Erro API mercado pago")
                
                transacao = transactionService.create(carrinho_id, userId, formData.transaction_amount, paymentType)
        
                const resposta = {
                    id: response.id,
                    qr_code: response.point_of_interaction?.transaction_data?.qr_code || null, 
                    qr_code_base64: response.point_of_interaction?.transaction_data?.qr_code_base64 || null,
                    status: response.status,
                    detail: response.status_detail
                }
                return {resposta, transacao}
                
            }catch( error){
                console.error("createPayment_mercadoPagoService", error)
                throw (error)
            }
            
    } 
        
//     static async listenWebhook (body) {  
//         try {
//             const paymentReceived = await payment.get({id:body.data.id});
            
//             if (paymentReceived.status === 'approved'){
//                 const transaction = await transactionService.changeStatus(body.data.id, 'finalizada')

//             }
//         if (paymentReceived.status === 'pending'){
//           transactionService.changeStatus(body.data.id, 'em_andamento')
//         }
//         if (paymentReceived.status === 'rejected'){
//             transactionService.changeStatus(body.data.id, 'rejeitada')
//         }
//         if (paymentReceived.status === 'cancelled'){
//             transactionService.changeStatus(body.data.id, 'cancelada')
//         }
//     } catch(error){
//         console.error("listenWebhook_mercadoPagoService")
//         throw (error)
//     }
// }

}
module.exports = MercadoPagoService