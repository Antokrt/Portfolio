import React, { useEffect, useState } from 'react';

export const useOrientation = () => {
    const [orientation, setOrientation] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(orientation: landscape)');
        setOrientation(mediaQuery.matches ? 'landscape' : 'portrait');

        const handleOrientationChange = (event:MediaQueryListEvent) => {
            setOrientation(event.matches ? 'landscape' : 'portrait');
        };

        mediaQuery.addListener(handleOrientationChange);

        return () => {
            mediaQuery.removeListener(handleOrientationChange);
        };
    }, []);

    return orientation;
}

