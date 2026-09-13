---
title: '"Inception" style nesting of Next.js Client and Server Components  '
date: '2024-04-22'
tags: ['Next.js', 'React', 'Server Components']
precis: "How do Next.js Client and Server Components differ? What are they each used for and how can we use them both to generate performant and feature rich applications?"
---
I was speaking to a friend the other day about Next.js components and how Server and Client Component types interact when nested when it occurred to me — this can get really confusing!  
  
What is each type of component good for?  
  
👍 This is the basic rule of thumb 👍  
✔️If your content is IMMUTABLE, use SERVER COMPONENTS  
✔️If your content is MUTABLE (i.e it will change and update) use CLIENT COMPONENTS  
  
⚡ Also keep in mind, anytime you want to use a hook, that is React and thus must be used inside a Client Component.  
  
💡 A very common pattern:  
Fetch data in a SERVER COMPONENT and pass this down as props to a CLIENT COMPONENT that uses that data in rendering the UI.  
(Server Components can use Async / Await)  
  
What of Server Actions? Do they have to be in a Server Component?  
Server Actions can be referenced in both Server and Client Components. This is great because it allows you to use two really handy form hooks: `useFormState` and `useFormStatus`.  
  
Implementing search via the `useSearchParams` hook is another common Client Component pattern.  
  
❗ GOTCHA TO WATCH FOR: Server Components become Client Components when imported into Client Components. You can, however, nest a Server Component inside a Client Component as children.  
  
A common use case for this would be in using React Context, where you wrap your app in a Provider that features useState or useReducer to handle state.  