import {handler, MessageEvent} from '../../index';

describe('handler function', () => {
    it('should return a new MessageEvent with "Hello" prepended to the message', async () => {
        const event: MessageEvent = {message: 'world'};
        const result = await handler(event);

        expect(result).toEqual({message: 'Hello world'});
    });
});