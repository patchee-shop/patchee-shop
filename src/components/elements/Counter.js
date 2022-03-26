import { useContext } from "react"
import { Context } from "../../Context"

export default function Counter({ recordId, remains }) {

    const {cartItems, setCartItems} = useContext(Context)
    const oneMoreItem = () => {
        setCartItems(prev => (
            {
                ...prev,
                [recordId]: (prev[recordId] < remains)? prev[recordId] + 1 : prev[recordId]
            }
        ))
    }
    const oneLessItem = () => {
        setCartItems(prev => (
            {
                ...prev,
                [recordId]: prev[recordId] > 1? prev[recordId] - 1 : 0
            }
        ))
        setCartItems(prev => (
            Object.fromEntries (
                Object.entries(prev).filter(([key, value]) => value > 0) 
            )
        ))
    }

    return (
        <div className="counter">
            <div onClick={oneLessItem}>
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <rect width="16" height="16" fill="rgba(255,255,255,0)"/>
                    <path d="M0,0V6.181" transform="translate(4.91 8) rotate(-90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                </svg>
            </div>
            <span className="counter--number">{cartItems[recordId]}</span>
            <div onClick={oneMoreItem} className={cartItems[recordId] >= remains && "transparent"}>
                <svg width="16" height="16" viewBox="0 0 16 16">
                    <rect width="16" height="16" fill="rgba(255,255,255,0)"/>
                    <path d="M421,519.609v6.181" transform="translate(-413 -514.699)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                    <path d="M0,0V6.181" transform="translate(4.91 8) rotate(-90)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1"/>
                </svg>
            </div>
        </div>
    )
}