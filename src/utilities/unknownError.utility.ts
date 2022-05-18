export const createUnknownErrorResponse = ({
    message,
    originalUrl,
}: {
    message: string;
    originalUrl: string;
}) => {
    return {
        type: 'error',
        error: {
            isKnown: false,
            message: message,
        },
        originalUrl: originalUrl,
    };
};

export const createUnknownErrorLog = ({
    message,
    originalUrl,
}: {
    message: string;
    originalUrl: string;
}) => {
    return createUnknownErrorResponse({
        message: message,
        originalUrl: originalUrl,
    });
};
