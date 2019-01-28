// Make sure plugins are loaded before main script!
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/aspectratio/ls.aspectratio'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes/plugins/respimg/ls.respimg'
import 'lazysizes/lazysizes'

// window.lazySizesConfig = window.lazySizesConfig || {}
// window.lazySizesConfig.customMedia = {
//   '--small': '(max-width: 320px)',
//   '--medium_small': '(max-width: 640px)',
//   '--medium': '(max-width: 1024px)',
//   '--medium_large': '(max-width: 1600px)',
//   '--large': '(max-width: 1920px)',
//   '--xlarge': '(max-width: 2560px)'
// }

export const emptyGif =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

const sortByKey = myObject => {
  return Object.keys(myObject).reduce((accumulator, currentValue) => {
    accumulator[currentValue] = myObject[currentValue]
    return accumulator
  }, {})
}

export const prepareSizes = sizes => {
  const sizesSorted = sortByKey(sizes)
  const lastKey = Object.keys(sizesSorted).pop()
  const mainImage = sizesSorted[lastKey]
  delete sizesSorted[lastKey]
  return {
    sizes: sizesSorted,
    main: mainImage
  }
}

export const getBgSet = sizes => {
  const sizesPrepared = prepareSizes(sizes)
  const bgset = Object.keys(sizesPrepared.sizes).map(key => {
    return `${sizesPrepared.sizes[key]} [(max-width:${key}px)]`
  })
  bgset.push(sizesPrepared.main)
  return {
    sizes: bgset.join(' | ')
  }
}
