import useStorage from "Shared/hooks/User/useStorage";
import { useState, useEffect } from "react";

interface User {
    id: string;
    email: string;
    role: 'user' | 'restaurant' | 'delivery_boy';
    name?: string,
    username: string,
    city?: string,
    nearestRailwayStation?: string,
    age?: string | number,
    vehicleType?: string,
    vehicleNumber?: string,
    location?: string,
    openingTime?: string,
    closingTime?: string,
    phoneNumber?: string,
}


const useAuth = () => {
    const { getMe } = useStorage();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
