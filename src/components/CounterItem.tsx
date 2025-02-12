import { memo } from "react";

export const CounterItem = memo(({ count }: { count: number }) => {
    return <h2>Counter: {count}</h2>;
});