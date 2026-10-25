
/**
 * Global Error Handling Middleware for Express
 * Must be registered AFTER all routes and other middleware.
 */


const errorHandler = (err, req, res, next) => {
  //  Fallback to 500 Internal Server Error if status is not explicitly set
  const statusCode = err.statusCode || err.status || 500;
  
  //  Format a consistent error structure
  const errorResponse = {
    success: false,
    status: statusCode,
    message: err.message || 'An unexpected error occurred.',
  };

  //  Conditionally expose stack trace only in development environment
  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }

  //  Log the error internally (replace console with a logger like Winston/Bunyan if needed)
  console.error(`[Error] ${req.method} ${req.url} - Status: ${statusCode}`);
  if (err.stack) {
    console.error(err.stack);
  }

  //  Send the structured JSON response to the client
  res.status(statusCode).json(errorResponse);
};

export default errorHandler
