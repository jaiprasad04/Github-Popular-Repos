// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFiltersData
  const btnClassName = isActive ? 'active-language-btn' : ''

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={`language-btn ${btnClassName}`}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
