import { useContext } from "react"
import { Context } from "../../Context"

export default function ContactsWindow({requestOrder}) {

    const {
        userPhone,
        setUserPhone,
        userName,
        setUserName,
        leftEmptyPhone,
        setLeftEmptyPhone,
        isContactsWindowShown,
        setIsContactsWindowShown
    } = useContext(Context)

    const handlePhone = (event) => setUserPhone((event.target.value))
    const handleName = (event) => setUserName((event.target.value))

    return (
        <div className={`contacts-window ${isContactsWindowShown}`}>
            <p className={`${leftEmptyPhone}`}>Номер телефона для связи</p>
                <input
                    className="userPhone"
                    type="text"
                    name="userPhone"
                    value={userPhone}
                    onChange={handlePhone}
                    placeholder="+7"
                    autoFocus={true}
                />
            <p>Имя</p>
                <input
                    className="useName"
                    type="text"
                    name="useName"
                    value={userName}
                    onChange={handleName}
                    autoFocus={false}
                />
            <div className="wrapper">
                <button
                    className="send"
                    onClick={
                        () => userPhone.length >= 10?
                        requestOrder() :
                        setLeftEmptyPhone("empty")
                    }
                >
                    Сделать заказ
                </button>
                <button
                    className="cancel"
                    onClick={() => setIsContactsWindowShown("hidden")}
                >
                    Назад
                </button>
            </div>
        </div>
    )
}