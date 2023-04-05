const jwt = require('jsonwebtoken')
const authConfig  =require('./auth_config.json')
const UserExtractor = (request, response, next) => {
  const Authorization = request.get('Authorization')
  let token = ''
 
  if (Authorization && Authorization.toLowerCase().startsWith('bearer')) {
    token = Authorization.slice(7)
  }

  console.log(token);
  
  const decodedToken = jwt.verify(token,authConfig.audience)

  console.log(decodedToken.id)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const { name, email } = decodedToken;

 // request.userId = userId

 // next()

 return {name,email}

  
}


module.exports = UserExtractor;