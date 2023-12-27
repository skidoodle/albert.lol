export default function age() {
  return Math.floor(
    (new Date().getTime() - new Date('2004-07-22').getTime()) /
      (1000 * 60 * 60 * 24 * 365.25)
  )
}
