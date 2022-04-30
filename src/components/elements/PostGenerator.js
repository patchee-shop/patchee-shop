export default function PostGenerator({userPhone, userName, pictures}) {
    return (
        <div
            className="post-generator"
            style={{
                backgroundImage: `url(${
                    (userPhone.includes("://") ? userPhone : pictures[0])
                })`,
                display: `${
                    (userPhone.includes("://") || userPhone.includes("?arina"))? "grid" : "none"
                }`
            }}
        >
            <div className="post-background"></div>
            <p
                className="post-label"
                style={{
                    fontSize: `${
                        52 - Math.max(...userName.split(" ").map(word => word.length))*1.5
                    }px`
                }}
            >
                {userName}
            </p>
        </div>
    )
}