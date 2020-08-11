
const Product = require("../model/product");
const routerproduct=require("../routers/product")


module.exports={

get:(req,res)=>{
  Product.find().then(producte=>
  res.send(producte)
.catch(err=>res.status(500).send("error server"))
  )

},
  
postProduct :  (req,res)=>{
  console.log(req.body)
  const newProduct = new Product(req.body);
      newProduct.save()
                .then(res.json('product added !'))
                .catch(err=> console.log(err))
},
deleteProduct : (req,res)=>{
  console.log(`${req.body}deleted`)
  Product.findByIdAndDelete(req.params.id)
          .then(res.json('delete product'))
          .catch(err=>console.log(err))
},
editProduct : (req,res,)=>{
  console.log(`${req.body} updated`)
  Product.findByIdAndUpdate(req.params.id,(req.body))
          .then(() =>{()=>res.json(req.body);console.log(req.body)})              
          .catch(err=>console.log(err))                      
          .then(() => res.json('product updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
}
}

//     postProduct :  (req,res)=>{
//         console.log(req.body)
//         const newProduct = new Product(req.body);
//             newProduct.save()
//                       .then(res.json('product added !'))
//                       .catch(err=> console.log(err))
//     },



//     deleteProduct : (req,res)=>{
//         console.log(`${req.body}deleted`)
//         Product.findByIdAndDelete(req.params.id)
//                 .then(res.json('delete product'))
//                 .catch(err=>console.log(err))
//     },



//     .
//     editProduct : (req,res,)=>{
//         console.log(`${req.body} updated`)
//         Product.findByIdAndUpdate(req.params.id,(req.body))
//                 .then(() =>{()=>res.json(req.body);console.log(req.body)})              
//                 .catch(err=>console.log(err))                      
//                 .then(() => res.json('product updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//     }
// };




























// const productcontroller = {
//   addproduct: (req, res) => {
   
//     const product = new productModel(req.body);
//     product.save()
//       .then(() => {
//         res.json({ message: "added" });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
// };
// module.exports = productcontroller