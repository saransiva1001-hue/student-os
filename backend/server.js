const dotenv = require('dotenv');
const path = require('path');

// Load environment configurations (load .env then overrides from .env.local)
dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const app = require('./src/app');
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[StudentOS API] Running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
});
