import { useRouter } from 'next/navigation';
import React from 'react';

const useNavigate = () => {
    const router = useRouter();

    const navigate = (path) => {
        router.push(path)
    }

    return{
        navigate
    }
}

export default useNavigate;