/**
 * Resuelve el secreto para firmar JWTs desde el entorno. Falla al arrancar si
 * no está definido: antes había un fallback hardcodeado (D-07) que dejaba al
 * servidor firmar tokens con un secreto público si la env faltaba.
 */
export function resolveJwtSecret(env: NodeJS.ProcessEnv = process.env): string {
  const secret = env.JWT_SECRET?.trim()
  if (!secret) {
    throw new Error('JWT_SECRET no está definido: agrégalo al .env (ver .env.example)')
  }
  return secret
}
