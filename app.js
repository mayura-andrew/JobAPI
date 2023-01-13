require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


// security npm packages
const helmet = require("helmet")
const cors  = require("cors")
const xss = require("xss-clean")
const rateLimit = require("express-rate-limit")

// connectDB
const connectDB = require("./db/connect")
const authenticateUser = require("./middleware/authentication")
//routers 

const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs", authenticateUser)

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// extra packages


app.set("trust proxy", 1);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
  
);







app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

// routes

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobsRouter)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log("Successfully connected to the MongoDB")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
