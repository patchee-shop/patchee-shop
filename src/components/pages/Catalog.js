import { useParams, Link } from "react-router-dom"
import { useContext } from "react"
import { Context } from "../../Context"
import ProductsList from "../elements/ProductsList";
import Searcher from '../elements/Searcher';

function Catalog() {

  const {filteredRecords} = useContext(Context)
  const params = useParams()
  const writePlaceholder = () => params.filter === "all"?
    "Поиск по всем товарам" :
    "Поиск в этой категории"
    
  return (
    <div className="section-view catalog">
      <div className="fix-wrapper">
        <h1 className='section-title'>Каталог товаров</h1>
        <Searcher placeholder={writePlaceholder()} autoFocus={params.filter === "all"? true : false}/>
        <div className='back'>
          <Link to="/">
            <svg width="15.127" height="23.983" viewBox="0 0 15.127 23.983">
              <path d="M18.141.857,6,13,17.841,24.84l2.985-2.985L11.969,13l9.158-9.158Z" transform="translate(-6 -0.857)" fillRule="evenodd"/>
            </svg>
          </Link>
          <Link to="/">
            <h3>В категории</h3>
          </Link>
        </div>
      </div>
      <ProductsList
        records={filteredRecords[`${params.filter}`]}
        categoryName={params.filter}
      />
    </div>
  );
}

export default Catalog