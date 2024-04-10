export const languages = [
  {
    name: 'JavaScript',
    value: 'javascript',
    icon: 'icons/javascript.svg',
  },
  {
    name: 'HTML',
    value: 'html',
    icon: 'icons/html.svg',
  },
  {
    name: 'CSS',
    value: 'css',
    icon: 'icons/css.svg',
  },
  {
    name: 'Python',
    value: 'python',
    icon: 'icons/python.svg',
  },
  {
    name: 'Java',
    value: 'java',
    icon: 'icons/java.svg',
  },
  {
    name: 'TypeScript',
    value: 'typescript',
    icon: 'icons/typescript.svg',
  },
]

export const themes = [
  {
    name: 'Monokai',
    value: 'monokai',
  },
  {
    name: 'Twilight',
    value: 'twilight',
  },
  {
    name: 'Terminal',
    value: 'terminal',
  },
];

export const backgrounds = [
  {
    name: 'linear-gradient(354deg, #ff75b5, #ffb86c)',
    value: 'linear-gradient(354deg, #ff75b5, #ffb86c)',
  },
  {
    name: 'linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))',
    value: 'linear-gradient(140deg, rgb(255, 207, 115), rgb(255, 122, 47))',
  },
  {
    name: 'linear-gradient(90deg, #93f9b9, #1d976c)',
    value: 'linear-gradient(90deg, #93f9b9, #1d976c)',
  },
  {
    name: 'linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))',
    value: 'linear-gradient(140deg, rgb(142, 199, 251), rgb(28, 85, 170))',
  },
  {
    name: 'linear-gradient(337deg, #654ea3, #da98b4)',
    value: 'linear-gradient(337deg, #654ea3, #da98b4)',
  },
  {
    name: '#000',
    value: '#000',
  },
  // {
  //   name: '#fff',
  //   value: '#fff',
  // },
  {
    name: 'linear-gradient(270deg, #fc6767, #ec008c)',
    value: 'linear-gradient(270deg, #fc6767, #ec008c)',
  },
  {
    name: 'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))',
    value: 'linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))',
  },
  {
    name: 'linear-gradient(270deg, #514a9d, #24c6dc)',
    value: 'linear-gradient(270deg, #514a9d, #24c6dc)',
  },
]

export const paddings = [
  {
    name: 'No padding',
    value: '0',
  },
  {
    name: 'Small',
    value: '1rem',
  },
  {
    name: 'Medium',
    value: '2rem',
  },
  {
    name: 'Large',
    value: '3rem',
  },
]

export const getInitialContent = () => `
export const nth = <T>(array: T[], index: number) => {
  return array.at(index)
}

export const head = <T>(array: T[]) => {
  return nth(array, 0)
}
`
