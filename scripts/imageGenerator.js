const sharp = require('sharp')
const path = require('path')
const fs = require('fs')
const recursive = require('recursive-readdir')
const uuid = require('uuid/v1')
const stripchar = require('stripchar').StripChar

/**
 * Image transform docs
 *  http://sharp.pixelplumbing.com/en/stable/api-output/
 * 
 * /

/**
 * Settings
 */
const imageSizes = [320, 640, 1024, 1440, 2560]
const sourceDirectory = '../raw'
const targetDirectory = '../public/assets/images/uploads'
const summaryFile = '../src/utils/imageLibrary.json'

/**
 * Helper functions
 */

// Create dir if not exists
const createDir = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

const stringToSlug = str => {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace('.', '-') // replace a dot by a dash
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by a dash
    .replace(/-+/g, '-') // collapse dashes

  return str
}

const generateThoseBasterds = new Promise(resolve => {
  recursive(sourceDirectory, ['.DS_Store'], (err, files) => {
    console.log(files)
    // ALlow jpg only
    const filesFiltered = files.filter(filepath => {
      const ext = path.extname(filepath)
      return ext === '.jpg'
    })

    if (filesFiltered.length) {
      // Get the name of the source directory
      const root = path.basename(sourceDirectory)
      createDir(targetDirectory)

      // Iterate all filepaths
      const totalfiles = filesFiltered.length
      let filecount = 0
      let output = []

      filesFiltered.forEach(filepath => {
        // Get the files extension
        const ext = path.extname(filepath)
        let filename = path.basename(filepath).replace(ext, '')
        filename = stringToSlug(filename)

        let fileTargetDirectory = require('path').dirname(
          filepath.replace(root + '/', '')
        )
        fileTargetDirectory = stringToSlug(fileTargetDirectory)
        createDir(targetDirectory + '/' + fileTargetDirectory)

        // Simplify filename for easier copy/paste
        const fileId = stripchar.RSExceptUnsAlpNum(filename)

        // Create Sharp instance
        const image = sharp(filepath)

        // Get the current image's metadata
        image.metadata().then(data => {
          // Loop thorugh the image sizes we want to generate
          const resizePromises = imageSizes.map(imageWidth => {
            // Get the new image height
            const imageHeight = Math.ceil(
              imageWidth * (data.height / data.width)
            )

            // Create new filename based on image size
            const newFilename = `${filename}-${imageWidth}x${imageHeight}${ext}`
            const newFilepath = `${targetDirectory}/${fileTargetDirectory}/${newFilename}`
            const relativePath = newFilepath.replace('./public', '')

            // Transform the image
            return image
              .resize(imageWidth)
              .jpeg({
                quality: 80,
                chromaSubsampling: '4:4:4' // subsampling setting for image quality < 90
              })
              .toFile(newFilepath)
              .then(res => {
                return {
                  id: fileId,
                  aspect: `${imageWidth}/${imageHeight}`,
                  width: imageWidth,
                  src: relativePath
                }
              })
              .catch(err => console.log(err))
          })

          Promise.all(resizePromises)
            .then(values => {
              const newValues = {
                id: uuid(),
                aspect: '',
                srcset: {}
              }
              values.forEach(item => {
                newValues.id = item.id
                newValues.aspect = item.aspect
                newValues.srcset[item.width] = item.src
              })
              filecount++
              console.log(`${filecount}/${totalfiles} images resized`)
              output.push(newValues)
              if (filecount === totalfiles) {
                resolve(output)
              }
            })
            .catch(err => console.log(err))

          // output.push(filedata)
        })
      })
    }
  })
})

generateThoseBasterds.then(res => {
  console.log(`Yippikayey!`)
  const jsonOutput = JSON.stringify(res, null, 2)
  const jsonPath = `${summaryFile}`
  fs.writeFile(`${jsonPath}`, jsonOutput, 'utf-8', (err, data) => {
    if (err === null) {
      console.log(`Successfully generated ${jsonPath}`)
    } else {
      console.log(err)
    }
  })
})
