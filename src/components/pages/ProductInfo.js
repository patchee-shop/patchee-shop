import { Context } from '../../Context'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../elements/ProductCard'
import { useContext } from 'react'

export default function ProductInfo() {

    const {records, currentCategory} = useContext(Context)
    const params = useParams()
    const chosenRecord = records[records.findIndex(el => el.id === params.id)]

    return (
        <div className="section-view product-info">
            <div className="fix-wrapper">
                <div className='back'>
                <Link to={`/catalog/${currentCategory}`}>
                    <svg width="15.127" height="23.983" viewBox="0 0 15.127 23.983">
                        <path d="M18.141.857,6,13,17.841,24.84l2.985-2.985L11.969,13l9.158-9.158Z" transform="translate(-6 -0.857)" fillRule="evenodd"/>
                    </svg>
                </Link>
                <Link to={`/catalog/${currentCategory}`}>
                    <h3>Назад</h3>
                </Link>
                </div>
            </div>
            {
                (records.length != 0) && 
                <>
                    <ProductCard
                        record={chosenRecord}
                        view={"big"}
                    />
                    <div className="text-information">
                        { chosenRecord.fields.Описание &&
                            <article>
                                <h3>Описание</h3>
                                <p>{chosenRecord.fields.Описание}</p>
                            </article>
                        }
                        { chosenRecord.fields['Способ применения'] &&
                            <article>
                                <h3>Способ применения</h3>
                                <p>{chosenRecord.fields['Способ применения']}</p>
                            </article>
                        }
                        { chosenRecord.fields.Бренд &&
                            <article>
                                <h3>Бренд</h3>
                                <p>{chosenRecord.fields.Бренд}</p>
                            </article>
                        }
                        { chosenRecord.fields.Объём &&
                            <article>
                                <h3>Объём</h3>
                                <p>{chosenRecord.fields.Объём}</p>
                            </article>
                        }
                        { chosenRecord.fields.Тэги &&
                            <article>
                                <h3>Теги</h3>
                                <p>{chosenRecord.fields.Тэги.join(', ')}</p>
                            </article>
                        }
                    </div>
                </>
            }
        </div>
    )
}