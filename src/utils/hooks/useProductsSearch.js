import { useState, useEffect, useCallback } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductsSearch({ pageSize, currentPage, searchParams }) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [reFetch, setReFetc] = useState(0);
    const [productSearch, setProductSearch] = useState(() => ({
        data: {},
        isLoading: true,
    }));

    const reSearch = useCallback(() => {
        setReFetc(reFetch + 1);
    })

    let productSearchQuery = ` [[fulltext(document, "${searchParams}")]] `

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
        return () => {};
        }

        const controller = new AbortController();

        async function getProductSearch() {
        try {
            setProductSearch({ data: {}, isLoading: true });
            const response = await fetch(
            `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
                '[[at(document.type, "product")]]'
            )}
            &q=${encodeURIComponent(
                productSearchQuery
            )}
            &lang=en-us&pageSize=${pageSize}&page=${currentPage}`,
            {
                signal: controller.signal,
            }
            );
            const data = await response.json();

            setProductSearch({ data, isLoading: false });
        } catch (err) {
            setProductSearch({ data: {}, isLoading: false });
            console.error(err);
        }
        }

        getProductSearch();

        return () => {
        controller.abort();
        };
    }, [apiRef, isApiMetadataLoading, reFetch]);

    return [productSearch, reSearch];
}
