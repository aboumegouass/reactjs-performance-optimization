import { memo } from "react";

export const CounterItem = memo(({ count }: { count: number }) => {
    console.log("CounterDisplay rendered");
    return <h2>Counter: {count}</h2>;
});