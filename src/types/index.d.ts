export {
  SelectOption,
}

declare global {
  type SelectOptionName = string

  type SelectOptionValue = string

  type SelectOption = {
    name: SelectOptionName
    value: SelectOptionValue
  }
}
