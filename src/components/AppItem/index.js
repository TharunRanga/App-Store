// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, appLink} = appDetails

  return (
    <li className="appitems-container">
      <a href={appLink} className="link">
        <img src={imageUrl} alt={appName} className="app-img" />
        <p className="app-name">{appName}</p>
      </a>
    </li>
  )
}

export default AppItem
