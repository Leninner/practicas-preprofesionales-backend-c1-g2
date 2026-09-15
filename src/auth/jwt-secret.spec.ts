import { describe, expect, it } from 'vitest'
import { resolveJwtSecret } from './jwt-secret'

describe('resolveJwtSecret', () => {
  it('returns the secret when JWT_SECRET is set', () => {
    expect(resolveJwtSecret({ JWT_SECRET: 'super-secreto' })).toBe('super-secreto')
  })

  it('throws when JWT_SECRET is missing', () => {
    expect(() => resolveJwtSecret({})).toThrow(/JWT_SECRET/)
  })

  it('throws when JWT_SECRET is blank', () => {
    expect(() => resolveJwtSecret({ JWT_SECRET: '   ' })).toThrow(/JWT_SECRET/)
  })
})
