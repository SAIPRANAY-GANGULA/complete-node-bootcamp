const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////
// FILES

// // Blocking, synchronous way
// const inputText = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(inputText);
// const textOut = `This is what we know about the avocado: ${inputText}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');
//
// //Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('Error!');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);
//
//       fs.writeFile(
//         './txt/final.txt',
//         `${data2}\n${data3}`,
//         'utf-8',
//         (err) => {
//           console.log('Your file has been written!');
//         }
//       );
//     });
//   });
// });
//
// //Async/await version
// const fs_promises = require('fs').promises;
//
// const processFiles = async () => {
//   try {
//     const data1 = await fs_promises.readFile('./txt/start.txt', 'utf-8');
//     const data2 = await fs_promises.readFile(`./txt/${data1}.txt`, 'utf-8');
//     console.log(data2);
//     const data3 = await fs_promises.readFile('./txt/append.txt', 'utf-8');
//     console.log(data3);
//
//     await fs_promises.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8');
//     console.log('Your file has been written!');
//   } catch (err) {
//     console.log('Error!', err);
//   }
// };
//
// processFiles();

/////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
  // console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is Overview!");
  } else if (pathName === "/product") {
    res.end("This is Product!");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "Hello World!",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
