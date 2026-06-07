export default function formatDateTimeWithGMT(date = new Date()) {
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = String(date.getFullYear()).slice(-2)

  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")

  const offsetMinutes = -date.getTimezoneOffset()
  const sign = offsetMinutes >= 0 ? "+" : "-"
  const absoluteMinutes = Math.abs(offsetMinutes)

  const offsetHours = Math.floor(absoluteMinutes / 60)
  const offsetRemainingMinutes = absoluteMinutes % 60

  const gmt =
    offsetRemainingMinutes === 0
      ? `GMT${sign}${offsetHours}`
      : `GMT${sign}${offsetHours}:${String(offsetRemainingMinutes).padStart(2, "0")}`

  return `${day}/${month}/${year} ${hours}:${minutes} ${gmt}`
}
