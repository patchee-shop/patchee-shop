import { Link } from 'react-router-dom'
import Searcher from '../elements/Searcher';

function Categories() {
  return (
    <div className="section-view categories">
        <div className="fix-wrapper">
            <h1 className='section-title'>Каталог товаров</h1>
            <Link to="/catalog/all">
                <Searcher placeholder={"Поиск по всем товарам"} autoFocus={false}/>
            </Link>
        </div>
        <section className='categories-grid'>
            <Link className="category-card antiaging" to="/catalog/antiaging">
                <p>Антивозрастная косметика</p>
            </Link>
            <Link className="category-card discounts" to="/catalog/discounts">
                <p>Скидки</p>
            </Link>
            <Link className="category-card facemasks" to="/catalog/facemasks">
                <p>Тканевые маски</p>
            </Link>
            <Link className="category-card hands" to="/catalog/hands">
                <p>Руки</p>
            </Link>
            <Link className="category-card body" to="/catalog/body">
                <p>Тело</p>
            </Link>
            <Link className="category-card face" to="/catalog/face">
                <p>Лицо</p>
            </Link>
            <Link className="category-card wrinkles" to="/catalog/wrinkles">
                <p>От морщин</p>
            </Link>
            <Link className="category-card darkcircles" to="/catalog/darkcircles">
                <p>От тёмных кругов</p>
            </Link>
            <Link className="category-card hair" to="/catalog/hair">
                <p>Волосы</p>
            </Link>
            <Link className="category-card moisture" to="/catalog/moisture">
                <p>Увлажнение</p>
            </Link>
            <Link className="category-card eyemasks" to="/catalog/eyemasks">
                <p>Патчи</p>
            </Link>
            <Link className="category-card acne" to="/catalog/acne">
                <p>От акне, прыщей и чёрных точек</p>
            </Link>
            <Link className="category-card scrubs" to="/catalog/scrubs">
                <p>Скрабы</p>
            </Link>
            <Link className="category-card other" to="/catalog/other">
                <p>Другое</p>
            </Link>
            <Link className="category-card all" to="/catalog/all">
                <p>Все товары</p>
            </Link>
        </section>
    </div>
  );
}

export default Categories