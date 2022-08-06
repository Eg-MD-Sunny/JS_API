//====>Example-01<===//
// fetch("Content/readme.txt")
// .then((responce)=>{
//      //console.log(responce.text());
//      return responce.text();
// })
// .then((data)=>{
//     //console.log(data);
//     document.write(data);
// });


//====>Example-02<===//
// fetch("Content/readme.txt")
// .then(function(response){
//     //console.log(response.text());
//     return response.text();
// })
// .then(function(data){
//     document.write(data);
// })


//===>This Example short form
// fetch("Content/readme.txt")
// .then(response => response.text())
// .then(data => document.write(data));


fetch("Content/readme.txt")
.then(response=>response.text())
.then(result=>console.log(result))
