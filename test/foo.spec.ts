import { Foo } from '../src/foo';

describe('Foo', () => {
    it('bar', () => {
        expect(typeof Foo.bar).toEqual('function');
        expect(Foo.bar()).toEqual('bar');
    });

    it('async', (done) => {
        setTimeout(() => {
            expect(1).toEqual(1);
            done();
        }, 3000);
    });
});
