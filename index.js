/*const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

//mongo
mongoose.connect('mongodb+srv://admin:<1234>@cluster0.bmwaxqm.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true
})

global.loggedIn = null

//controller  
/*const indexController = require('./controller/indexController')
const loginController = require('./controller/loginController')
const registerController = require('./controller/registerController')
const storeUserController = require('./controller/storeUserController')
const loginUserController = require('./controller/loginUserController')
const logoutController = require('./controller/logoutController')
const homeController = require('./controller/homeController')
const carGR86Controller = require('./controller/carGR86Controller')
const carFK8Controller = require('./controller/carFK8Controller')
const blogController = require('./controller/blogController') 





//mid
const redirectifAuth = require("./middleware/redirectifAuth")
const AuthMiddleware = require("./middleware/AuthMiddleware")


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.use("*", (req, res, next) =>{
    loggedIn = req.session.userId
    next()
})
app.set('view engine', 'ejs')

/*app.get('/', indexController)
app.get('/home', AuthMiddleware, homeController)
app.get('/login',redirectifAuth, loginController)
app.get('/register', redirectifAuth, registerController)
app.post('/user/register', redirectifAuth, storeUserController)
app.post('/user/login', redirectifAuth, loginUserController)
app.get('/logout', logoutController)
app.get('/carGR86', AuthMiddleware, carGR86Controller)
app.get('/carFK8', AuthMiddleware, carFK8Controller)
app.get('/blog', AuthMiddleware, blogController)*/



app.listen(4000, () =>{
    console.log("App listening on port 4000")
})






var swiper = new Swiper(".myHeader", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    });


//********************* SHOP POPULAR PRODUCT***********************
    let shopProduct = [
      {
          name:"Esprit Ruffle Shirt",
          img:"/shopImage/shrit1.jpg",
          price:65.25,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Herschel supply",
          img:"/shopImage/shrit2.jpg",
          price:45.25,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Only Check Trouser",
          img:"/shopImage/shrit3.jpg",
          price:89.50,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Classic Trench Coat",
          img:"/shopImage/shrit4.jpg",
          price:58.79,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Front Pocket Jumper",
          img:"/shopImage/shrit5.jpg",
          price:68.00,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Vintage Inspired Classic",
          img:"/shopImage/shrit6.jpg",
          price:45.25,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Shirt in Stretch Cotton",
          img:"/shopImage/shrit7.jpg",
          price:150.65,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      },
      {
          name:"Pieces Metallic Printed",
          img:"/shopImage/shrit8.jpg",
          price:100.35,
          title:"Nullar eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
      }]

let popularRow = document.querySelector('.popular-row')

// console.log(shopProduct[0].img)


popularRow.innerHTML  = shopProduct.map((item)=>{
  let {name,price,img} = item


  return `
         <div class="popular-col">
            <div class="image">
            <img src=${img} alt="">
            <a href="shop.html" class="viewPD">View Product</a>
            </div>
             <div class="content">
                  <h4 class="popular-name">${name}</h4>
                  <p class="popular-price">$${price}</p>
              </div>
          </div>
  `

}).join("")




// register.addEventListener('click',() =>{
//     register.classList.remove('active')
//     registerRow.classList.remove('active')
// })


