/**
 * @swagger
 * /exemplo:
 *   get:
 *     summary: Exemplo Swagger
 *     tags: [Exemplo Swagger]
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   nome_exemplo:
 *                     type: string
 *                     description: Nome exemplo
 *                   exemplo_number:
 *                     type: integer
 *                     description: Number exemplo
 *                   objeto_exemplo:
 *                     type: object
 *                     description: Objeto exemplo
 *       404:
 *         description: Não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
