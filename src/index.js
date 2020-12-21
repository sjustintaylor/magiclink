require("dotenv").config();
const service = require("restana")({
  errorHandler: require("./middleware/errorHandler"),
});

// Route handlers
service.use("/sessions", require("./routes/sessions"));

// Start the server
service.start(process.env.PORT || 5000).then((service) => {
  console.log(`Service started on ${process.env.PORT || 5000}`);
});
