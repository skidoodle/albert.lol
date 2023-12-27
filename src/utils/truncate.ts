export const truncate = (str: string, n: number) =>
  str.length > n ? str.slice(0, n - 1) + '...' : str
