/* eslint-disable no-undef */
import * as handler from '../handler';

describe('handler', () => {
  it('hello', async () => {
    const response = await handler.hello();
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body).toBe('string');
  });
});
