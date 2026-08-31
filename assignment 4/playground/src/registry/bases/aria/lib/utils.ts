type ClassNameFunc = (...args: any[]) => string

export function cn(...parts: Array<string | false | null | undefined | ClassNameFunc>) {
  return parts
    .map((p) => {
      if (!p) return ''
      if (typeof p === 'function') {
        try {
          return p(...([] as any))
        } catch {
          return ''
        }
      }
      return p
    })
    .filter(Boolean)
    .join(' ')
}
