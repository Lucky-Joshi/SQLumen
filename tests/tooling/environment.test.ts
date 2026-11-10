import { describe, expect, it } from 'vitest';

import {
  assertSupportedNodeVersion,
  InvalidNodeVersionError,
  isSupportedNodeVersion,
  MINIMUM_NODE_MAJOR,
  parseNodeVersion,
  UnsupportedNodeVersionError,
} from '../../scripts/tooling/environment';

describe('parseNodeVersion', () => {
  it('parses a plain semantic version', () => {
    expect(parseNodeVersion('22.12.0')).toEqual({ major: 22, minor: 12, patch: 0 });
  });

  it('parses a v-prefixed semantic version', () => {
    expect(parseNodeVersion('v24.7.0')).toEqual({ major: 24, minor: 7, patch: 0 });
  });

  it('ignores surrounding whitespace', () => {
    expect(parseNodeVersion(' 22.12.0 ')).toEqual({ major: 22, minor: 12, patch: 0 });
  });

  it('rejects malformed versions explicitly', () => {
    expect(() => parseNodeVersion('22')).toThrow(InvalidNodeVersionError);
    expect(() => parseNodeVersion('not-a-version')).toThrow(InvalidNodeVersionError);
  });
});

describe('isSupportedNodeVersion', () => {
  it('accepts the minimum supported major version', () => {
    expect(isSupportedNodeVersion(`${MINIMUM_NODE_MAJOR}.0.0`)).toBe(true);
  });

  it('accepts newer major versions', () => {
    expect(isSupportedNodeVersion('v24.7.0')).toBe(true);
  });

  it('rejects older major versions', () => {
    expect(isSupportedNodeVersion('20.19.0')).toBe(false);
  });
});

describe('assertSupportedNodeVersion', () => {
  it('does not throw for supported versions', () => {
    expect(() => assertSupportedNodeVersion('22.12.0')).not.toThrow();
  });

  it('throws an actionable error for unsupported versions', () => {
    expect(() => assertSupportedNodeVersion('20.19.0')).toThrow(UnsupportedNodeVersionError);
    expect(() => assertSupportedNodeVersion('20.19.0')).toThrow(
      `SQLUMEN requires Node.js ${MINIMUM_NODE_MAJOR} or newer`,
    );
  });
});
