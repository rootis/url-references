interface Env {
  COLLECTION_PATH: string;
  FIREBASE_CONFIG: {[key: string]: string};
}

interface Process {
  env: Env;
}

declare var process: Process;

export const environment = {
  production: false,
  collectionPath: process.env.COLLECTION_PATH,
  firebaseConfig: process.env.FIREBASE_CONFIG
};
