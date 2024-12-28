# React setInterval memory leak
This repository demonstrates a common mistake when using `setInterval` within a React component's `useEffect` hook. The provided code incorrectly handles cleanup, leading to memory leaks.  The solution demonstrates the correct way to manage `setInterval` to avoid these issues.

## Bug
The bug lies in the `MyComponent` function. It uses `setInterval` to update a count every second. However, the `clearInterval` function in the cleanup function is incorrectly referencing setInterval rather than the interval ID that was set earlier. This results in the interval not being cleared when the component unmounts, causing memory leaks.

## Solution
The solution corrects this by storing the result of `setInterval` in a variable and using that variable in the `clearInterval` call within the cleanup function.