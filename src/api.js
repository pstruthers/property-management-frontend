export async function getMessage() {
  const res = await fetch('http://localhost:8000')
  return await res.text()
}