export const nth = <T>(array: T[], index: number) => {
  return array.at(index)
}

export const head = <T>(array: T[]) => {
  return nth(array, 0)
}
