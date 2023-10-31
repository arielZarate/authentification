const admin = require("firebase-admin");
// Configurar Firebase Admin
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
//const { applicationDefault } = require("firebase-admin/app");

//option para db firestore
//const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //credential: applicationDefault(),

  //ejemplo de db en firestore
  //  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

// Middleware para verificar el token
const verifyFirebaseToken = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization.split(" ")[1]; //OJO CON ESTO DEBEMOS SACARLE EL ESPACIO

    console.log("token back", idToken);
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    console.log("pasoooo", decodedToken);
    next();
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

//const db = getFirestore();

module.exports = { verifyFirebaseToken };
