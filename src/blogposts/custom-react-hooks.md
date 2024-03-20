---
title: 'React custom hooks — what, why and how?'
date: '2024-03-20'
tags: ['React Hooks', 'React']
precis: "Custom React hooks make life far easier for us devs if we know how to use them. Here is what custom hooks are, what they are not and how to use them for more efficient and readable code."
---
What is a custom hook in React? There are some misconceptions that need to be cleared up before we can learn how custom hooks can make life so much easier when developing React projects.

First of all, and this is a big one, custom hooks MUST call a React Hook. This is what makes custom hooks special. Normal functions cannot call React Hooks like `useState()` or `useEffect()` for example. Only React components (designated as components by capitalising the first letter of the function name) and custom hooks (designated by the prefix "use").

So if your helper function does not call a React Hook it should not be prefixed with "use".

In fact, the [React documentation](https://react.dev/learn/reusing-logic-with-custom-hooks) explicitly tells us to avoid adding the prefix "use" to the name of a function that does not call a React Hook. However, the docs go on to say React doesn't throw a tantrum if you violate this rule:

> Technically, this isn’t enforced by React. In principle, you could make a Hook that doesn’t call other Hooks. This is often confusing and limiting so it’s best to avoid that pattern.

## So when should one use a custom hook?

That said, how do we known when to use custom hooks?

There is no hard and fast answer, but I'll give one shortly. Generally, if a piece of functionality that uses React Hooks is used in more than one location, this is the ideal time to create a hook for it.

**My rule of thumb is:** 
> If you are using `useEffect()` in your component consider using a custom hook to abstract it out of the component body.

Now, I don't expect everyone to agree with me on this one, but hear me out. 

## `useEffect()` overkill

When you look at modern components in React, two things stand out:
1. The `useEffect()` references don't explicitly tell you their purpose
2. Multiple `useEffect()` calls that bloat and confuse what the component does

With respect to (1), think about every non-`useEffect()` function in your component. They will almost certainly be named appropriately. `handleClick`, `handleDispatchItems`... These event handlers are named according to what they do. Not so with our friend the `useEffect`

Furthermore, when you start stacking `useEffect()` calls in a component, things can get out of hand very quickly. Couple that with the fact that many times a `useEffect()` is simply updating state with `useState()` and now we have more lines of code to deal with.

So let's use custom hooks to separate concerns. Instead of just throwing `useEffect()` and `useState()` hooks everywhere, be a good developer and break this out into it's own named hook function.

Take the following component that uses a fetch call to a Fantasy Premier League API:

```js
export default function FplRank() {
  const [ranks, setRanks] = useState({ rank: 0, oldRank: 0 });

  const getFplStats = async () => {
    const result = await fetch("/api/fpl");
    const data = await result.json();
    return data;
  };

  useEffect(() => {
    const allStats = getFplStats();
    allStats.then((s) =>
      setRanks({ rank: s.entry_rank, oldRank: s.entry_last_rank })
    );
  }, []);
  ...
};
```
Here we have numerous lines of code at the top of our component dedicated solely to fetching game rank data and setting it in state.

Let's move all this code out of the component and move it to a separate function at the end of the file. Note, if this functionality is used elsewhere also, lift it from the component file and into a `utils` or `shared` folder for reuse.

```js
function useSetFPLData() {
  const [ranks, setRanks] = useState({ rank: 0, oldRank: 0 });
  
  const getFplStats = async () => {
    const result = await fetch("/api/fpl");
    const data = await result.json();
    return data;
  };

  useEffect(() => {
    const allStats = getFplStats();
    allStats.then((s) =>
      setRanks({ rank: s.entry_rank, oldRank: s.entry_last_rank })
    );
  }, []);
  
  return {rank: ranks.rank, oldRank: ranks.oldRank}
};
```
This hook now fetches all the data we need, sets the data in state and returns it so we can use it later.

All we need to do is call the custom hook and extract the data. I've destructured the object to make it easily accessible in our component.

```js
export default function FplRank() {
 const {rank, oldRank } = useSetFPLData();
 ...
};
 ```

And there you have it, a simple way to start using React custom hooks and making your code neater and more contained. 

Custom hooks, especially those that are reused in other places in your app, can take in parameters. As an example, I could have made a much more generic `useFetch()` hook that takes in an API endpoint string and returns a data object at the end.

```js
function useFetch(endpoint: string) {
  const [data, setData] = useState(null);
  const getData = useCallback(async () => {
    try {
      const result = await fetch(endpoint);
      const returnedData = await result.json();
      return returnedData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [endpoint]);

  useEffect(() => {
    const data = getData();
    data.then((s) => setData(data));
  }, [getData]);

  return data;
}
```

Thanks for reading!