```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // This will not work as expected
    router.push('/my-page', '/my-page?param=value'); 
  };

  return (
    <button onClick={handleClick}>Go to My Page</button>
  );
}
```