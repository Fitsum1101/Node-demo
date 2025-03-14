const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const doc = new PDFDocument();

const mainPath = require("../util/path");

const filePath = path.join(mainPath, "data", "pdf");

exports.dowlloadPDF = (req, res, next) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Dispostion", "inline");
  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
};

exports.dowlloadPDFstream = (req, res, next) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Dispostion", "inline");
  const readstream = fs.createReadStream(filePath);
  readstream.pipe(res);
};

exports.createPDF = (req, res, next) => {
  //   const name = req.body.name ? req.body.name : "fitsum";
  //   const password = req.body.password ? req.body.password : "12345";

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Dispostion",
    'inline; filename="' + "invoiceName" + '"'
  );
  doc.pipe(
    fs.createWriteStream(path.join(filePath, `${Math.random() + ".pdf"}`))
  );
  doc.pipe(res);

  doc.text("name");
  doc.text("password");
  doc.end();
};

// exports.blobhandling = (req, res, next) => {
//   var blobStream = require("blob-stream");
//   res.pipe(blobStream()).on("finish", function () {
//     // get a blob
//     var blob = this.toBlob();

//     // or get a blob URL
//     var url = this.toBlobURL();
//     console.log(url);
//   });
// };

// require dependencies
// const PDFDocument = require("pdfkit");
// const blobStream = require("blob-stream");

// // create a document the same way as above
// const doc = new PDFDocument();

// // pipe the document to a blob
// const stream = doc.pipe(blobStream());

// doc.text("fitsum kifle");
// // add your content to the document here, as usual

// // get a blob when you're done
// doc.end();
// stream.on("finish", function () {
//   // get a blob you can do whatever you like with
//   const blob = stream.toBlob("application/pdf");
//   console.log(blob);
//   // or get a blob URL for display in the browser
//   const url = stream.toBlobURL("application/pdf");
//   console.log(url);
// });
