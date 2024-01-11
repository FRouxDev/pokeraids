import mongoose from 'mongoose';
import { MONGODB_URI } from '$env/static/private';

const mongoConnection = {
  isConnected: 0,
};

export const dbConnect = async () => {
  console.log('MONGO_URL', MONGODB_URI);
  if (mongoConnection.isConnected === 1) {
    console.log('connexion déjà établie');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log('utilisation connexion existante');
      return;
    }

    await mongoose.disconnect();
  }
  await mongoose.connect(MONGODB_URI ?? '');
  mongoConnection.isConnected = 1;
  console.log('connecté à mongodb', MONGODB_URI ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log('déconnecté de mongodb');
};
