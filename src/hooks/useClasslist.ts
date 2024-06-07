const useClassList =
  (  styleObject: { [x: string]: any }) =>
  (...classList: any[]) => {
    const generateClassString = (output: string, newClass: string | string[]) => {
      if (output) {
        output += ' '
      }

      if (Array.isArray(newClass)) {
        output += newClass.reduce(generateClassString, '') // recursion to deal with Arrays
      } else if (styleObject[newClass]) {
        output += styleObject[newClass]
      } else if (typeof newClass === 'string') {
        output += newClass
      }

      return output
    }

    return classList.reduce(generateClassString, '')
  }

export default useClassList
