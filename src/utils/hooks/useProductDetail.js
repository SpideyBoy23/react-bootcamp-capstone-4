import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductDetail( productId ) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [product, setProduct] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    let urlParam = '';
    urlParam = `[[at(document.id, "${productId}")]]`

    let pageSize = 12;

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
        return () => {};
        }

        const controller = new AbortController();

        async function getProduct() {
        try {
            setProduct({ data: {}, isLoading: true });
            const response = await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                    urlParam
                )}&lang=en-us&pageSize=${pageSize}`,
            {
                signal: controller.signal,
            }
            );
            const data = await response.json();

            setProduct({ data, isLoading: false });
        } catch (err) {
            setProduct({ data: {}, isLoading: false });
            console.error(err);
        }
        }

        getProduct();

        return () => {
        controller.abort();
        };
    }, [apiRef, isApiMetadataLoading]);

    return product;
}
