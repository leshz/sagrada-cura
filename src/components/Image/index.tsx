import Img from 'next/image'

const ImageWrapper = ({ image, format = '', fill = false, ...props }) => {
  let imagen = {}
  const source = image?.data?.attributes || image?.attributes || {}

  if (
    Object.prototype.hasOwnProperty.call(source, 'formats') &&
    format !== ''
  ) {
    // get data from formats
  } else {
    imagen = {
      src:
        source?.url ||
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC',
      width: !fill ? source?.width || 100 : undefined,
      height: !fill ? source?.height || 100 : undefined,
      alt: source?.alternativeText || '',
      fill
    }
  }
  const propsToImage: any = { ...imagen, ...props }

  return <Img src={propsToImage.src} alt={propsToImage.alt} {...propsToImage} />
}

export { ImageWrapper }
