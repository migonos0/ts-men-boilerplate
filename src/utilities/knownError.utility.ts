export const createKnownErrorResponse = ({
    message,
    originalUrl,
}: {
    message: string;
    originalUrl: string;
}) => {
    return {
        type: 'error',
        error: {
            isKnown: true,
            message: message,
        },
        originalUrl: originalUrl,
    };
};

export const createKnownErrorLog = ({
    message,
    originalUrl,
}: {
    message: string;
    originalUrl: string;
}) => {
    return createKnownErrorResponse({
        message: message,
        originalUrl: originalUrl,
    });
};

export class KnownError extends Error {
    constructor(message: string) {
        super(message); // (1)
        this.name = 'KnownError'; // (2)
    }
}
