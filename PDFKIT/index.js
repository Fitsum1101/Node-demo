const fs = require("fs");
const path = require("path");

const mainPath = require("../util/path");

const filePath = path.join(mainPath, "data", "pdf", "example.pdf");

exports.dowlloadPDF = (req, res, next) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Dispostion", "inline");
  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);

    res.send(data);
  });
};
