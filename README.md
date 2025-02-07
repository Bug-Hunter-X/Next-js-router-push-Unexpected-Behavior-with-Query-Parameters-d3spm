# Next.js router.push Unexpected Behavior with Query Parameters

This repository demonstrates a common but subtle bug in Next.js related to using the `router.push` method with query parameters.  The provided code showcases the issue, and a solution is presented to avoid the unexpected behavior.

## Bug Description

The incorrect use of `router.push` when including query parameters in the URL can lead to the application navigating to the wrong location. This bug can be difficult to detect and debug since it might not always manifest, depending on routing configurations.

## Solution

The correct approach involves properly handling query parameters within the `router.push` method. The solution provided addresses the issue, ensuring that the query parameters are correctly interpreted by Next.js.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button. Observe the URL.  The original buggy code will navigate to an incorrect URL; the solution will work correctly.
