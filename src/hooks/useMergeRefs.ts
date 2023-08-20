import { useMemo } from 'react';

export function useMergeRefs<Instance>(
    refs: (React.Ref<Instance> | undefined)[],
): React.RefCallback<Instance> | null {
    return useMemo(() => {
        if (refs.every((ref) => ref == null)) {
            return null;
        }

        return (value) => {
            refs.forEach((ref) => {
                if (typeof ref === 'function') {
                    ref(value);
                } else if (ref != null) {
                    (ref as React.MutableRefObject<Instance | null>).current = value;
                }
            });
        };
    }, refs);
}
