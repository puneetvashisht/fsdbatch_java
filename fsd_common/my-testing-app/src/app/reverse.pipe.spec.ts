import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('test reverse pipe', () => {
    const pipe = new ReversePipe();
    let reveresedStr: string = pipe.transform("hello");
    expect(reveresedStr).toBe("olleh")
  });
});
