export const isEnvironmentReady = (callback: (message: string) => void) => {
    if (!process.env.PORT) {
        callback('PORT environment variable not available.\nEg: PORT=4000');
        return false;
    }
    if (!process.env.ORIGIN) {
        callback(
            'ORIGIN environment variable not available.\nEg: ORIGIN="http://localhost:3000"'
        );
        return false;
    }
    if (!process.env.DB_URI) {
        callback(
            'DB_URI environment variable not available.\nEg: DB_URI="mongodb://localhost:27017/cinema_techmtc"'
        );
        return false;
    }
    return true;
};
