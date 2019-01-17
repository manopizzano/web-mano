import React, { Component } from 'react'
import cc from 'classcat'

// import { acfImageToSrcset } from '../../utils/helpers'

/**
 * Image sizes
 *
 * thumbnail:       320x320
 * small:           320x0
 * medium_small:    640x0
 * medium:          1024x0
 * medium_large:    1600x0
 * large:           1920x0
 * xlarge:          2560x0
 */

export default class Image extends Component {
  render() {
    const { className, image } = this.props
    return (
      <img
        className={cc({
          aspect: true,
          lazyload: true,
          [className]: className
        })}
        data-sizes="auto"
        // data-srcset={
        //   small
        //     ? acfImageToSrcset(image.sizes, 1000)
        //     : acfImageToSrcset(image.sizes)
        // }
        alt={image.alt || image.title}
        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      />
    )
  }
}
