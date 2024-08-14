/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   responses:
 *     UnauthorizedError:
 *       description: Access token is missing or invalid
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: "No token provided"
 * 
 *   examples:
 *     BearerTokenExample:
 *       summary: Example of Authorization header with JWT
 *       value: "Bearer your_jwt_token_here"
 * 
 *   parameters:
 *     AuthorizationHeader:
 *       in: header
 *       name: Authorization
 *       required: true
 *       schema:
 *         type: string
 *         example: "Bearer your_jwt_token_here"
 *       description: "JWT token to be passed in the Authorization header in the format 'Bearer <token>'"
 *
 * tags:
 *   - name: Middleware
 *     description: Middleware documentation for authentication and authorization.
 *
 * paths:
 *   /:
 *     get:
 *       tags:
 *         - Middleware
 *       summary: JWT Authentication Middleware
 *       description: Middleware that verifies the JWT token in the Authorization header.
 *       security:
 *         - bearerAuth: []
 *       parameters:
 *         - $ref: '#/components/parameters/AuthorizationHeader'
 *       responses:
 *         '200':
 *           description: Successful authentication
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Authentication successful"
 *         '401':
 *           $ref: '#/components/responses/UnauthorizedError'
 *         '403':
 *           description: Access denied
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: "Access denied"
 */
