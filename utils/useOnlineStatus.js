import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
        setOnlineStatus(onlineStatus)
        })
        
        window.addEventListener("offline", () => {
            setOnlineStatus(!onlineStatus)
        })
}, [])

    return onlineStatus;
}
export default useOnlineStatus;