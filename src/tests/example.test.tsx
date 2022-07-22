import { assert, describe, expect, it } from 'vitest';

describe('is equal', () => {
    it('foo', () => {
        expect(1 + 1).toEqual(2);
    });

    it('bar', () => {
        assert.equal(Math.sqrt(4), 2);
    });

    it('snapshot', () => {
        expect({ foo: 'bar' }).toMatchSnapshot();
    });
});
