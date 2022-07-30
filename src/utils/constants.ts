export const TEST_ID_ATTRIBUTE = 'test-id';

export const testIdRule = (attributeValue: string): string =>
  `[${TEST_ID_ATTRIBUTE}="${attributeValue}"]`;
