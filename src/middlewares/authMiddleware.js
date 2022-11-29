import firebase from '../helpers/firebase';

const checkAuth = (roles) => async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(400).json({ message: 'Provide a token' });
    }

    const user = await firebase.auth().verifyIdToken(token);

    if (!roles.includes(user.role)) {
      throw new Error('Invalid role');
    }

    req.firebaseUid = user.uid;

    return next();
  } catch (error) {
    return res.status(400).json({ message: error.toString() });
  }
};

export default checkAuth;
