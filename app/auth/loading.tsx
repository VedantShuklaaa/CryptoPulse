import react from 'react';
import { Spinner } from '@heroui/spinner';

export default function Loading() {
    return (
        <div className="flex flex-wrap items-end gap-8 bg-black">
            <Spinner classNames={{ label: "text-foreground mt-4 size-lg" }} label="dots" variant="dots" />
        </div>
    )
}