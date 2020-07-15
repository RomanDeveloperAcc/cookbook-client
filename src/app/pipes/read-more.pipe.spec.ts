import { ReadMorePipe } from './read-more.pipe';

describe('ReadMorePipe', () => {
  it('create an instance', () => {
    const pipe = new ReadMorePipe();
    expect(pipe).toBeTruthy();
  });

  it('should cut the long text', () => {
    const longText = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    const pipe = new ReadMorePipe();

    const result = pipe.transform(longText);

    expect(result).toBe('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...');
  });

  it('should leave the short text', () => {
    const longText = 'abc';

    const pipe = new ReadMorePipe();

    const result = pipe.transform(longText);

    expect(result).toBe('abc');
  });
});
