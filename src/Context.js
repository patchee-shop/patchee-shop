import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    

    // WIDELY USED STATES
    const [records, setRecords] = useState([])
    const [filteredRecords, setFilteredRecords] = useState({
        antiaging: [],
        discounts: [],
        facemasks: [],
        hands: [],
        body: [],
        face: [],
        wrinkles: [],
        darkcircles: [],
        hair: [],
        moisture: [],
        eyemasks: [],
        acne: [],
        scrubs: [],
        other: [],
        all: []
    })
    const [currentCategory, setCurrentCategory] = useState("all")
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || {})

    // WIDELY USED FUNCTIONS
    const additionalFilterTyping = (records) => {
        return (records.filter(record => (
            JSON.stringify(record).toLowerCase().includes(searcherValue.toLowerCase())
      )))
    }
    const filterForCategory = (tag) => {
        return additionalFilterTyping(records.filter(record => record.fields.Тэги.includes(tag)))
    }
    const filterTyping = () => {
        return (records.filter(record => (
            JSON.stringify(record).toLowerCase().includes(searcherValue.toLowerCase())
        )))
    }
    useEffect(() => {
        setFilteredRecords({
            antiaging: filterForCategory("антивозрастное"),
            discounts: filterForCategory("скидки"),
            facemasks: filterForCategory("тканевые маски"),
            hands: filterForCategory("руки"),
            body: filterForCategory("тело"),
            face: [...filterForCategory("лицо"), ...filterForCategory("под глаза"), ...filterForCategory("вокруг глаз")],
            wrinkles: filterForCategory("морщины"),
            darkcircles: filterForCategory("тёмные круги"),
            hair: filterForCategory("для волос"),
            moisture: filterForCategory("увлажнение"),
            eyemasks: filterForCategory("патчи"),
            acne: filterForCategory("акне"),
            scrubs: filterForCategory("скрабы"),
            other: filterForCategory("другое"),
            all: records
        })
    }, [records])

    // CONSTANTS
    const productsAvailableBaseUrl = "https://api.airtable.com/v0/appduyTcvGxpEgTb8/tblMpliaVkCLsiKnC?view=%D0%92+%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8"
    const ordersListBaseUrl = "https://api.airtable.com/v0/appduyTcvGxpEgTb8/%D0%9E%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%BE%D0%B2"

    // CONNECTION WITH DATABASE
    useEffect(() => {
        fetch(productsAvailableBaseUrl, {
            headers: {
                'Authorization': 'Bearer keymV3iplyx82ryEd'
            }
        })
            .then(res => res.json())
            .then(data => (setRecords(data.records)))
    }, [])
    const insertNewOrder = (itemId, quantity, orderId, userPhone, userName) =>
        fetch(ordersListBaseUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer keymV3iplyx82ryEd',
                'Content-Type': 'application/json'
            },
            body:
            `{ 
                "fields": {
                    "Номер заказа": "${orderId}",
                    "Скидка": 0,
                    "Товар": [
                        "${itemId}"
                    ],
                    "Количество": ${quantity},
                    "Телефон": "${userPhone}",
                    "Имя": "${userName}"
                }
            }`
        })

    // SEARCHER ELEMENT
    const [searcherValue, setSearcherValue] = useState("")
    const handleSearcher = (event) => {
        setSearcherValue(prevValue => (
            prevValue = event.target.value
        ))
    }
    useEffect(() => {
        setFilteredRecords({
            antiaging: filterForCategory("антивозрастное"),
            discounts: filterForCategory("скидки"),
            facemasks: filterForCategory("тканевые маски"),
            hands: filterForCategory("руки"),
            body: filterForCategory("тело"),
            face: [...filterForCategory("лицо"), ...filterForCategory("под глаза"), ...filterForCategory("вокруг глаз")],
            wrinkles: filterForCategory("морщины"),
            darkcircles: filterForCategory("тёмные круги"),
            hair: filterForCategory("для волос"),
            moisture: filterForCategory("увлажнение"),
            eyemasks: filterForCategory("патчи"),
            acne: filterForCategory("акне"),
            scrubs: filterForCategory("скрабы"),
            other: filterForCategory("другое"),
            all: filterTyping()
        })
    }, [searcherValue])

    // INTERACTIONS WITH USER AND CART PAGE
    const [isContactsWindowShown, setIsContactsWindowShown] = useState("hidden")
    const [leftEmptyPhone, setLeftEmptyPhone] = useState("")
    const [userPhone, setUserPhone] = useState(JSON.parse(localStorage.getItem("userPhone")) || "+7")
    const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("userName")) || "")
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    useEffect(() => {
        localStorage.setItem("userPhone", JSON.stringify(userPhone))
    }, [userPhone])
    useEffect(() => {
        localStorage.setItem("userName", JSON.stringify(userName))
    }, [userName])

    return (
        <Context.Provider value={{
            records: filteredRecords.all,
            filteredRecords,
            searcherValue,
            setSearcherValue,
            handleSearcher,
            currentCategory,
            setCurrentCategory,
            cartItems,
            setCartItems,
            isContactsWindowShown,
            setIsContactsWindowShown,
            leftEmptyPhone,
            setLeftEmptyPhone,
            insertNewOrder,
            userPhone,
            setUserPhone,
            userName,
            setUserName
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
