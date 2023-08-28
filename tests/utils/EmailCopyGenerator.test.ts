import { generateEmailCopy } from '../../src/utils/EmailCopyGenerator';

describe('EmailCopyGenerator', () => {
  it('should generate compelling and direct-response email copy', () => {
    const emailCopy = generateEmailCopy();
    expect(emailCopy).toBeDefined();
    expect(emailCopy).toMatch(/compelling/i);
    expect(emailCopy).toMatch(/direct-response/i);
  });
});