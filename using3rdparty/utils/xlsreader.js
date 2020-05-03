const node_xj = require("xls-to-json-lc");
node_xj({
  input: "/Users/amit/Documents/products.xls",  // input xls
  output: "output.json", // output json
  sheet: "Sheet10",  // specific sheetname
  lowerCaseHeaders:true
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log("Excel Data is ",result);
  }
});