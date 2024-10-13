// Shared/utils/navigate.js
import { useRouter } from 'next/router';

export const useNavigate = () => {
    const router = useRouter();

    const navigate = (path) => {
        router.push(path);
    };

    return navigate;
};
