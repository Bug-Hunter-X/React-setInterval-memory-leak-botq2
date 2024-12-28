```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // updates every 1 second
    return () => clearInterval(setInterval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```