import process from 'process';

describe('Test group 1', () => {
  const previousEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = {...previousEnv};
  });

  afterAll(() => {
    process.env = previousEnv;
  });

  test('Test Case 1', () => {
    process.env.TEST = undefined;
    expect(process.env.TEST).toBe(undefined);
  });

});