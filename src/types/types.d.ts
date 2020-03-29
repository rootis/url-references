interface Env {
    COLLECTION_PATH: string;
    FIREBASE_CONFIG: {[key: string]: string};
}

interface Process {
    env: Env;
}

declare var process: Process;
