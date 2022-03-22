import { useContext } from "react"
import { Context } from "../../Context"

export default function Searcher({placeholder, autoFocus}) {
    const {searcherValue, handleSearcher} = useContext(Context)
    return (
        <input
            className="searcher"
            type="text"
            name="searcher"
            value={searcherValue}
            onChange={handleSearcher}
            placeholder={placeholder}
            autoFocus={autoFocus}
        />
    )
}