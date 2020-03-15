interface Env {
    FIREBASE_CONFIG: {[key: string]: string};
}

interface Process {
    env: Env;
}

declare var process: Process;
