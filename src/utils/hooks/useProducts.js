import { useState, useEffect, useCallback } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProducts({ pageSize, currentPage }) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [reFetch, setReFetc] = useState(0);
    const [products, setProducts] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    const reSearch = useCallback(() => {
        setReFetc(reFetch + 1);
    })

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
        return () => {};
        }

        const controller = new AbortController();

        async function getProducts() {
        try {
            setProducts({ data: {}, isLoading: true });
            const response = await fetch(
            `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                '[[at(document.type, "product")]]'
            )}&lang=en-us&pageSize=${pageSize}&page=${currentPage}`,
            {
                signal: controller.signal,
            }
            );
            const data = await response.json();

            setProducts({ data, isLoading: false });
        } catch (err) {
            setProducts({ data: {}, isLoading: false });
            console.error(err);
        }
        }

        getProducts();

        return () => {
        controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, reFetch]);

    return [products, reSearch];
}
