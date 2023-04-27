export function toDateString(time: number): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: 'numeric', day: 'numeric' }

  return new Date(time * 1000).toLocaleDateString('en-US', options)
}
