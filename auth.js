const jwt = require('jsonwebtoken')

// chargement du fichier d'env



exports.generateAccessToken = function (user) {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 50000 });
}

exports.isAuthentificated = function (req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1] 
  console.log(token);

  if (token == null) return res.sendStatus(401) 

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403) 
    req.user = user 
    next()
  })
}