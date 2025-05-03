import react from 'react';
import { Spinner } from '@heroui/spinner';

export default function loading() {
    return (
        <div className="flex flex-wrap items-end gap-8">
            <Spinner classNames={{ label: "text-foreground mt-4 size-lg" }} label="dots" variant="dots" />
        </div>
    )
}