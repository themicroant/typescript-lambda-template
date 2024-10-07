export interface MessageEvent {
    message: string;
}

export const handler = async (event: MessageEvent) => {
    return {message: "Hello " + event.message};
};