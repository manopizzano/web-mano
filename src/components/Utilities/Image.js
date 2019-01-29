// import React, { Component } from 'react'
// import cc from 'classcat'

// // import { acfImageToSrcset } from '../../utils/helpers'

// /**
//  * Image sizes
//  *
//  * thumbnail:       320x320
//  * small:           320x0
//  * medium_small:    640x0
//  * medium:          1024x0
//  * medium_large:    1600x0
//  * large:           1920x0
//  * xlarge:          2560x0
//  */

// export default class Image extends Component {
//   render() {
//     const { className, image } = this.props
//     return (
//       <img
//         className={cc({
//           aspect: true,
//           lazyload: true,
//           [className]: className
//         })}
//         data-sizes="auto"
//         data-srcset={
//           small
//             ? acfImageToSrcset(image.sizes, 1000)
//             : acfImageToSrcset(image.sizes)
//         }
//         alt={image.alt || image.title}
//         src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
//       />
//     )
//   }
// }
import React, { Component, Fragment } from 'react'
import { getImageFromId } from '../../utils/image'
import { prepareSizes } from '../../utils/lazysizes'
import uuid from 'uuid/v1'
import { renderToStaticMarkup } from 'react-dom/server.browser'

class Picture extends Component {
  render() {
    const sizesPrepared = prepareSizes(this.props.srcset)
    return (
      <Fragment>
        <picture>
          {Object.keys(sizesPrepared.sizes).map(key => {
            return (
              <source
                key={uuid('source')}
                data-srcset={sizesPrepared.sizes[key]}
                media={`(max-width:${key}px)`}
              />
            )
          })}
          <source data-srcset={sizesPrepared.main} />
          <img
            data-sizes="auto"
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            className="lazyload"
            alt={this.props.alt}
            data-aspectratio={this.props.aspect}
          />
        </picture>
        <noscript>
          {renderToStaticMarkup(
            <img src={this.props.srcset['1024']} alt={this.props.alt} />
          )}
        </noscript>
      </Fragment>
    )
  }
}

export default class Image extends Component {
  render() {
    const { aspect, srcset } = getImageFromId(this.props.id)
    // if (loading) return null
    return (
      <figure>
        <Picture aspect={aspect} srcset={srcset} alt={this.props.alt} />
        {this.props.caption && (
          <figcaption className="Caption">
            {this.props.captionLabel && (
              <span className="Caption__label">{this.props.captionLabel}</span>
            )}
            {this.props.caption}
          </figcaption>
        )}
      </figure>
    )
  }
}
