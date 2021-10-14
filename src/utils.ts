export function getElementArray(query: string) {
  return Array.from(
    document.querySelectorAll(query)
  ) as HTMLElement[]
}
