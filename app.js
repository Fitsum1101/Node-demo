const express = require("express");

const pdfkitController = require("./PDFKIT/index");

const app = express();

//  dowalload pdfs that are store in my server

app.get("/pdfServer", pdfkitController.dowlloadPDF);

app.get("/pdfStream", pdfkitController.dowlloadPDFstream);

// app.get("/pdfcreate", pdfkitController.blobhandling);

try {
  app.listen(8080);
} catch (error) {
  console.log(error.message);
}
