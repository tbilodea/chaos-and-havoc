import express from 'express';
import videoRoutes from './routes/videoRoutes';
import { errorHandler } from './errorHandler';
import config from './config';

const app = express();

app.use(express.json());

// Routes
app.use('/api/video', videoRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});