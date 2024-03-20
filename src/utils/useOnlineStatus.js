import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    // check if user is online or not
    useEffect(() => {
        window.addEventListener("offline", () => {
            setIsOnline(false);
        });

        window.addEventListener("online", () => {
            setIsOnline(true);
        });
    }, []);

    // bool value
    return isOnline;
}

export default useOnlineStatus;