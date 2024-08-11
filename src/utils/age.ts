const BIRTHDATE = process.env.NEXT_PUBLIC_BIRTHDATE

export default function age() {
  if (!BIRTHDATE) {
    console.warn('Missing environment variable: BIRTHDATE')
    return 0
  }

  return Math.floor(
    (new Date().getTime() - new Date(BIRTHDATE).getTime()) / 3.15576e10
  )
}
