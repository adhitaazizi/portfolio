'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortfolioRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/');
    }, [router]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <p>Redirecting to home...</p>
        </div>
    );
}
