const jwt = require ('jsonwebtoken')
const { JWT_SECRET } = require('../../secrets')

module.exports = (req, res, next) => {

  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  // 2. Check for missing token
  if (!token) {
      return res.status(401).send("missing token")
  }
  // 3. Validate the token
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
          return res.status(403).send("invalid token")
      } else {
        req.decodedToken = decodedToken
        next()
      }
    
  })


  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".



    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
};
