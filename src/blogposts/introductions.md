---
title: 'Look Ma, I made this! (With Next.js)'
date: '2024-03-01'
tags: ['Next.js', 'React', 'Tailwind']
precis: "In this my first blog post, I cover what the making of this site and how Next.js plus Tailwind made it so easy to build."
---

Welcome! This is the first post of many more to come on web development. It was time to upgrade my portfolio so I thought why not add a blog? This will scratch the itch I've had all my life to write, communicate and hopefully educate.

The site is built with Next.js and Tailwind — the CSS library that I have discovered is so rewarding to work with.

I learned a lot in making this site, so in upcoming posts I will outline some of the key things that are unique to Next 13+. If you aren't aware, the old Page Router way of setting up your site was replace by an App Router in Next 13.4.

This was a fundamental change to the core of how we create routes and interact with the server. The major changes include:

- **Routing** - App Routing uses the server whereas the Pages Router is purely a client-side feature
- **Server Component** support included in the App Router
- The App Router has **Better performance** while adding complexity and greater flexibility

The App Router is fairly intuitive. The added complexity and flexibility starts with the folder-based way you lay out your pages. Instead of having a Pages directory, inside the App folder you simply add a folder with the name of the path the add a `Page.tsx` file. Include all your markup and JSX here as you would in any React component.

The directory can have a `Page.tsx` file OR a `route.ts` file. If you are defining a simple page routing ssytem, set you r folders up as the paths you want to create and add that `Page.tsx` to include all your markup and React code. Use the `route.ts` file to create endpoints with all the HTTP requests that you wish. 

This too is a marked change from how API routing was handled previously, whereby you created an API folder and included your routing files in there, much like you would in an Express.js backend.

I'll outline more of this in upcoming articles, but for now, the [Route Handler docs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) outline how to create API endpoints using Request and Response objects.

I learned a lot creating the Markdown Blog platform on this site, so I'll cover that in detail too, as the methods for building this functionality have changed since the old Pages Router days.

In any case, the site creation process with Next.js and Tailwind proved to be a very smooth and enjoyable process. In fact, it brought a lot fun back into the development process and I for one will support anything that reduces up front set up and configuration time. 

Back with more soon!

Fred Lunjevich, February 2024
