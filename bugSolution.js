```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct usage of router.push with query parameters
    router.push({
      pathname: '/my-page',
      query: { param: 'value' },
    });
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}
```