# Performance Optimization

Here's an optimized version of **Counter** component that prevents unnecessary re-renders when typing in the input field:

## Key Improvements

- **`React.memo`:** Wraps the **CounterItem** component to prevent unnecessary re-renders
- **`useCallback`:** Memoizes the increment function to avoid re-creating it on every render
- I have taken the input out into an external **FormInput** component which will be usable in the future. Component source `/components/Form/FormInput`
