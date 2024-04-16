import fileSaver from 'file-saver'
import html2canvas from 'html2canvas'

export const nth = <T>(array: T[], index: number) => {
  return array.at(index)
}

export const head = <T>(array: T[]) => {
  return nth(array, 0)
}

export const htmlToImage = async (element: HTMLElement) => {
  const canvas = await html2canvas(element)
  const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')

  return image
}

export const saveImage = (dataUrl: string, fileName: string) => {
  fileSaver.saveAs(dataUrl, fileName)
}
