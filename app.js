const express = require("express");

const pdfkitController = require("./PDFKIT/index");

const app = express();

//  dowalload pdfs that are store in my server

app.get("/pdfServer", pdfkitController.dowlloadPDF);

try {
  app.listen(8080);
} catch (error) {
  console.log(error.message);
}
