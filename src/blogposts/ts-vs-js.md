---
title: 'Why TypeScript is necessary'
date: '2024-03-02'
tags: ['TypeScript', 'JavaScript']
precis: "Like many people learning to program for the web, I resisted learning TypeScript. Now I find it hard to go back to vanilla JavaScript. But not everyone is happy with TypeScript and think it is overkill. Do they have a point?."
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

I get it, TypeScript *appears* to be an unnecessary pain, especially to the uninitiated. However, it is odd for a seasoned dev to make the claim TypeScript has "spoiled JavaScript" and an impediment to good code.

I'll agree that TypeScript shares a lot with C#. As a superset of JavaScript, TypeScript was influenced by what had come before, especially since both languages come from the Microsoft stable.

For me, having come from JavaScript and learning TypeScript as a necessity for my first dev job, I can't agree with the sentiment that going back to Vanilla JS is an option. I've worked in a large codebase that had multiple complex state slices and streaming hand motion capture data, which on it's way to the UI took many forms. These forms all needed to be strictly typed so that the data we were feeding into services and expecting to come out of them was clean and what we ultimately expected. 

You see, JavaScript was never created as a standalone programming language. It was for all intents and purposes developed to make the web interactive. Beyond making things pop, move and jiggle, it wasn't seriously intended to be what it is today. But while JavaScript has advanced markedly in the past decade (thanks jQuery!), the inability to robustly type JavaScript applications has limited what it could be seriously used for in commercial and large-scale projects. 

TypeScript helps with scalability and handling complexity. Furthermore, given it's power and the fact code is not just localised to front or back ends, why wouldn't you use TypeScript for everything? For me, the best tools and packages for web development provide their users with TypeScript integration. tRPC for example provides type unification at all levels of an application. The increasingly popular package Zod provides "TypeScript-first schema validation with static type inference". When it comes to choosing tools for the job, TypeScript isn't even a question I consider. It's a no-brainer. I've been to the mountain top and seen the view, there's no way I'd be going back to Vanilla JS willingly.

TypeScript may have some C# mimicry in play, but this is how all good things advance. Looking at what has come before and taking the best parts is what makes innovation so great and TypeScript is a major innovation in the development field. With environments that allow TypeScript to be run outside of a web context (Electron.js and React Native for example) we now have a reliable language that can be used in desktop and mobile software products, further extending the power and reach of the underlying language, JavaScript.

Incidentally... TypeScript was actually created in concert with VS Code to make the best IDE experience possible. With typing you get autocomplete, error highlighting, autosuggestions and many other features. This undoubtedly makes the lives of developers easier and is probably why JavaScript to a large degree is thriving as a preferred development language in both web and software applications.

