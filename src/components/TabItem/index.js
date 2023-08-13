import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, getActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onActiveTab = () => {
    getActiveTab(tabId)
  }

  const activeTab = isActive ? 'active-tab-button' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeTab}`}
        onClick={onActiveTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
