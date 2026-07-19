const prisma = require('../config/db');

/**
 * Health Controller returning status check.
 */
exports.checkHealth = async (req, res, next) => {
  try {
    // Verify database connectivity
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    next(error);
  }
};
