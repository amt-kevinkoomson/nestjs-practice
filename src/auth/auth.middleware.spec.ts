import { AuthGuard } from './auth.middleware';

describe('AuthMiddleware', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
