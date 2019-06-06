const express     = require('express');

// ######################## //

const app         = express();
const port        = 1991;
const runningPort = console.log("Running at port", port);

// ######################## //

// IMPORT ADMIN ROUTER
const admin             = require('./adminRouter/admin');
const product           = require('./adminRouter/product');
const categoryProduct   = require('./adminRouter/category');
const brand             = require('./adminRouter/brand');
const coupon            = require('./adminRouter/coupon');
const orders            = require('./adminRouter/orders')
// END IMPORT ADMIN ROUTER

// ######################## //

// IMPORT USER ROUTER
const users             = require('./userRouter/users');
const wishlist          = require('./userRouter/wishlist');
// END IMPORT USER ROUTER

// ######################## //

// USING APP WITH ADMIN ROUTER
app.use(admin);
app.use(product);
app.use(categoryProduct);
app.use(brand);
app.use(coupon);
app.use(orders);
// END USING APP WITH ADMIN ROUTER

// ######################## //

// USING APP WITH USER ROUTER
app.use(users);
app.use(wishlist);
// END USING APP WITH USER ROUTER

// ######################## //
app.listen(port, runningPort);