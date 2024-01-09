import mongoose from 'mongoose';
import { DB_URL } from '$env/static/private';

const mongoConnection = {
  isConnected: 0,
};

export const dbConnect = async () => {
  console.log('MONGO_URL', DB_URL);
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
  await mongoose.connect(DB_URL ?? '');
  mongoConnection.isConnected = 1;
  console.log('connecté à mongodb', DB_URL ?? '');
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log('déconnecté de mongodb');
};
