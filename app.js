const express = require('express');
const cors = require('cors');
const logger = require('morgan');

// Routes
const questions = require('./routes/questions');
const answers = require('./routes/answers');

const app = express();

// Logger
if (process.env.NODE_ENV !== 'production') {
    app.use(logger('dev'))
}

// CORS
app.use(cors())

app.get('/', (req, res) => {
  const help = `
  <pre>
    Welcome to the Multiple Choice Test API!
    fetch(url)
    The following endpoint is available:
    GET /questions
  </pre>
  `
  res.send(help)
})

// Routes
app.use('/questions', questions);
app.use('/answers', answers);

// Catch 404 Errors and  forward then to error handler
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    const status = err.status || 500
    
    // Respond to client
    res.status(status).json({
        error: {
            message: err.message
        }
    });

    // Respond to us
    console.log(err);
});

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`API Server running at port ${PORT}`);
});