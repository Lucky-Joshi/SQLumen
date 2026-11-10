/**
 * Minimum supported Node.js major version.
 *
 * Keep this value aligned with `.nvmrc`, `package.json` engines, and CI.
 */
export const MINIMUM_NODE_MAJOR = 22;

export interface NodeVersion {
  readonly major: number;
  readonly minor: number;
  readonly patch: number;
}

export class InvalidNodeVersionError extends Error {
  public constructor(version: string) {
    super(`Invalid Node.js version string: "${version}". Expected MAJOR.MINOR.PATCH.`);
    this.name = 'InvalidNodeVersionError';
  }
}

export class UnsupportedNodeVersionError extends Error {
  public constructor(version: string) {
    super(
      `SQLUMEN requires Node.js ${MINIMUM_NODE_MAJOR} or newer; detected ${version}. ` +
        'Use the version declared in .nvmrc.',
    );
    this.name = 'UnsupportedNodeVersionError';
  }
}

/**
 * Parse a Node.js version string such as `22.12.0` or `v22.12.0`.
 *
 * @throws {InvalidNodeVersionError} When the value is not a semantic version.
 */
export function parseNodeVersion(version: string): NodeVersion {
  const match = /^v?(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$/.exec(version.trim());
  const major = match?.groups?.major;
  const minor = match?.groups?.minor;
  const patch = match?.groups?.patch;

  if (major === undefined || minor === undefined || patch === undefined) {
    throw new InvalidNodeVersionError(version);
  }

  return {
    major: Number(major),
    minor: Number(minor),
    patch: Number(patch),
  };
}

/**
 * Return whether a Node.js version satisfies the project runtime policy.
 *
 * @throws {InvalidNodeVersionError} When the value is not a semantic version.
 */
export function isSupportedNodeVersion(version: string): boolean {
  return parseNodeVersion(version).major >= MINIMUM_NODE_MAJOR;
}

/**
 * Fail fast when the current runtime is older than the supported Node.js major version.
 *
 * @throws {UnsupportedNodeVersionError} When the runtime is unsupported.
 */
export function assertSupportedNodeVersion(version: string): void {
  if (!isSupportedNodeVersion(version)) {
    throw new UnsupportedNodeVersionError(version);
  }
}
