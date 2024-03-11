---
title: 'Why TypeScript is necessary'
date: '2024-03-02'
tags: ['TypeScript', 'JavaScript']
precis: "Like many people learning to programming for the web, I resisted learning TypeScript. Now I find it hard to go back to vanilla JavaScript. But not everyone is happy with TypeScript and think it is overkill. Do they have a point?."
---
Ahh, TypeScript, how could I ever get by without thee? While I'm a massive fan of TypeScript, not everyone feels the same love for it. In fact, the comment below which is from a recent Linkedin post inspired me to think more deeply about the role TypeScript plays and why it is even a thing.

> The same as CoffeeScript was designed for Ruby developers who did not love JavaScript.  
> The same TypeScript was not designed to help JavaScript developers, it was invented for C# and Java developers who hate JavaScript.  
>   
> I worked in several UI JS framework companies and we lived well without TypeScript. And I know many people who dream of coming back to Vanilla JS and getting rid of TypeScript.  
>   
> I worked in ExtJS(Sencha), it is huge JS UI framework build on OOP patterns. It worked well without TypeScript. JSDoc was enough.  
>   
> TypeScript is in fact C#, it is not JavaScript even closer.  
> Microsoft spoiled our lovely JavaScript.

I get it, TypeScript *appears* to be an unnecessary pain, especially to the uninitiated. However, for a seasoned dev to make the claim TS has "spoiled JavaScript" and an impediment to good code is odd.

I'll agree that TypeScript shares a lot with C#. As a superset of JavaScript, TypeScript was influenced by what had come before, especially since both languages come from a Microsoft stable.

For me, having come from JS and learning TS as a necessity for my first dev job, I can't agree with the sentiment that going back to Vanilla JS is an option. I've worked in a large codebase that had multiple complex state slices and streaming hand motion capture data, which on it's way to the UI took many forms. These forms all needed to be strictly typed so that the data we were feeding into services and expecting to come out of them was clean and what we ultimately expected. 

So yes, TypeScript helps with scalability and handling complexity. Furthermore, why wouldn't you use it for everything, backend and frontend? For me, the best tools and packages for web development provide their users with TypeScript integration. tRPC for example provides type unification at all levels of an application. The increasingly popular package Zod provides "TypeScript-first schema validation with static type inference". 

TypeScript was actually created in concert with VS Code to make the best IDE experience possible. With typing you get autocomplete, error highlighting, autosuggestions and many other features. This undoubtedly makes the lives of developers easier and is probably why JavaScript to a large degree is thriving as a preferred development language in both web and software applications.

