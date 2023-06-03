// Mongobd 
require('./config/database');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/adsImage/' })

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// import route 

const userRouter = require('./routes/user');
const pageRouter = require('./routes/User/Page');
const adsRequestRouter = require('./routes/User/AdsRequests');
const adsRouter = require('./routes/User/AdsManagers');
const AccountsRouter = require('./routes/User/Accounts');
const CreditRequest = require('./routes/User/Credit');

// Admin 

const daysRouter = require('./routes/Admin/Days');
const amountsRouter = require('./routes/Admin/Amounts');
const Role = require('./routes/Admin/Role');
const AdsRequests = require('./routes/Admin/AdsRequests');
const AdminAdsManager = require('./routes/Admin/AdsManager');
const AccountsRequest = require('./routes/Admin/AccountsRequests');

// import route End 



// route Lists

// user Route 

app.use('/user', userRouter);
app.use('/page', pageRouter);
app.use('/ads/request', adsRequestRouter);
app.use('/ads', adsRouter);
app.use('/accounts', AccountsRouter);
app.use('/credit', CreditRequest);


// admin Route 
app.use('/days', daysRouter);
app.use('/amounts', amountsRouter);
app.use('/role', Role);
app.use('/admin/ads/requests', AdsRequests);
app.use('/admin/ads/manager', AdminAdsManager);
app.use('/admin/accounts', AccountsRequest);



// route Lists End



// app.post('/uploadfile', upload.single('image'), (req, res) => {
//   const file = req.body.image
// console.log(file);
  
// });





app.get('/', (req, res) => {
  res.send('Hello World!')
})




// app.post('/login', (req, res) =>{

//     console.log("post api called");
//     console.log(req.body);

// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})