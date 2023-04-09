import './index.css'

const ThumbnailItem = props => {
  const {eachItem, toDisplay, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = eachItem

  const classNameToBe = isActive ? 'button1' : 'button'

  const imageClicked = () => {
    toDisplay(id, imageUrl, imageAltText)
  }

  return (
    <li className="list">
      <button className={classNameToBe}>
        <img src={thumbnailUrl} alt={thumbnailAltText} onClick={imageClicked} />
      </button>
    </li>
  )
}
export default ThumbnailItem
