const setupSwagger = require('./docs/swagger');

const App = require('./app')
const app = new App()

setupSwagger(app);

app.start(3010)