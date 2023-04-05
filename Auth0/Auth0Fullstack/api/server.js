const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const cors = require("cors");
const app = express();
const authConfig  =require('./src/auth_config.json')
const decoded =require('./src/decoded')
app.use(cors());

const port = 3000;


const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
}).unless({ path:[ "/" ] });

 
  //===================


app.use(checkJwt);



app.get("/", (req, res) => console.log("Estas en la landing"));

app.get("/home", (req, res) => {

  const header=req.headers;
  const user=req.user;
  console.log(header ,"\n", user)
  /* console.log({
    msg: "Your access token was successfully validated!",
   

  }); */
});




/* app.use(async (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  error.status = 403;
  next(error);
});
app.use(async (error, req, res) => {
  const status = error.status || 500;
  const message = error.message || "internal server error";

  //res.sendStatus(status);
  res.status(status).send(message);
}); */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));



/* 

jwt
const jwt = require('jsonwebtoken')

const UserExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  let token = ''
 
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.slice(7)
  }

  console.log(token);
  
  const decodedToken = jwt.verify(token, process.env.SECRET)

  console.log(decodedToken.id)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const { id: userId } = decodedToken

  request.userId = userId

  next()


}


module.exports = UserExtractor;

*/