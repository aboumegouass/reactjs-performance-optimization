import { lazy, useCallback, useState } from 'react'
import { CounterItem } from './CounterItem';

const FormInput = lazy(() => import("./Form/FormInput"));

function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const increment = useCallback(() => setCount((prev) => prev + 1), []);

    return (
        <div>
            <CounterItem count={count} />
            <button onClick={increment}>Increment</button>
            <br />
            <FormInput
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
        </div>
    );
}

export default Counter