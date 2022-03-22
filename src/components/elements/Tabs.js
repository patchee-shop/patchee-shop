import { Link } from "react-router-dom"

export default function Tabs() {
    return (
        <nav className="nav">
            <ul className="nav--tabs">
                <li className="tabs--catalog">
                    <Link className="tabs--catalog--link" to={process.env.PUBLIC_URL + "/"}>
                        <svg width="31.5" height="24.75" viewBox="0 0 31.5 24.75">
                            <g transform="translate(-2.25 -5.625)">
                                <path d="M21.375,11.25H29.25V13.5H21.375Z" />
                                <path d="M21.375,16.875H29.25v2.25H21.375Z" />
                                <path d="M21.375,22.5H29.25v2.25H21.375Z" />
                                <path d="M31.5,5.625H4.5a2.252,2.252,0,0,0-2.25,2.25v20.25a2.252,2.252,0,0,0,2.25,2.25h27a2.253,2.253,0,0,0,2.25-2.25V7.875A2.252,2.252,0,0,0,31.5,5.625Zm-27,2.25H16.875v20.25H4.5Zm14.625,20.25V7.875H31.5l0,20.25Z" />
                            </g>
                        </svg>
                        <p>Каталог</p>
                    </Link>
                </li>
                <li className="tabs--cart">
                    <Link className="tabs--cart--link" to={process.env.PUBLIC_URL + "/cart"}>
                        <svg width="33.749" height="31.5" viewBox="0 0 33.749 31.5">
                            <g transform="translate(0 -4.5)">
                                <path d="M0,5.625A1.125,1.125,0,0,1,1.125,4.5H4.5a1.125,1.125,0,0,1,1.091.853L6.5,9H32.625a1.125,1.125,0,0,1,1.091,1.4L30.341,23.9a1.125,1.125,0,0,1-1.091.853H9A1.125,1.125,0,0,1,7.909,23.9L3.623,6.75h-2.5A1.125,1.125,0,0,1,0,5.625ZM7.065,11.25l1.125,4.5h3.06v-4.5Zm6.435,0v4.5H18v-4.5Zm6.75,0v4.5h4.5v-4.5Zm6.75,0v4.5h3.06l1.125-4.5ZM29.5,18H27v4.5h1.373ZM24.75,18h-4.5v4.5h4.5ZM18,18H13.5v4.5H18Zm-6.75,0h-2.5l1.125,4.5H11.25Zm0,11.25A2.25,2.25,0,1,0,13.5,31.5,2.25,2.25,0,0,0,11.25,29.25ZM6.75,31.5a4.5,4.5,0,1,1,4.5,4.5A4.5,4.5,0,0,1,6.75,31.5ZM27,29.25a2.25,2.25,0,1,0,2.25,2.25A2.25,2.25,0,0,0,27,29.25ZM22.5,31.5A4.5,4.5,0,1,1,27,36,4.5,4.5,0,0,1,22.5,31.5Z"  fillRule="evenodd"/>
                            </g>
                        </svg>
                        <p>Корзина</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}