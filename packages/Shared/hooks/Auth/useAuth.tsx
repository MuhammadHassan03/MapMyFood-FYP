import useStorage from "Shared/hooks/User/useStorage";
import { useState, useEffect } from "react";

const useAuth = () => {
    const { getMe } = useStorage();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await getMe();
                setUser(fetchedUser);
            } catch (err) {
                console.log('error', err);
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return { user, loading, error };
};

export default useAuth;
