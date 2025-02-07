import React from 'react'
import { useDebounce } from 'use-debounce';
function useDebouncedValue(value, delay) {
    const [debounce] = useDebounce(value, delay);
    return debounce
}

export default useDebouncedValue