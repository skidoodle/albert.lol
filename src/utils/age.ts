const BIRTHDATE = process.env.NEXT_PUBLIC_BIRTHDATE

export default function age() {
  if (!BIRTHDATE) {
    throw new Error('Missing environment variable: BIRTHDATE')
  }

  return Math.floor(
    (new Date().getTime() - new Date(BIRTHDATE).getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  )
}
