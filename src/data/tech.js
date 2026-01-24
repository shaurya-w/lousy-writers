export const blogs = [
  {
    id: 1234,
    slug: "a-blog-about-a-blog",
    title: "A blog about a blog",
    subtitle: "Because...why not?",
    date: "August 21, 2025",
    content: `
I’d always wanted to start a blog. Lousy Writers first began as a WordPress site, but I soon discovered that I could build a website myself, and since it’s now part of my curriculum, that turned out to be a win-win situation. So, I began learning web technologies to create this website. Along the way, I discovered that there are two aspects of web development: frontend and backend. Most people begin with frontend, which is about how the website looks and how users interact with it (excluding functionality, which is essentially part of backend development).

-> Design, Setup, and Tailwind
I started by designing the basic layout of the website for both mobile and desktop views. You know, there’s something deeply calming about fine-tuning a design down to the very last pixel. I had studied plain CSS earlier, and I decided to learn Tailwind this time.

And thus began the flood of npm commands — and the inevitable “command not found” errors — during the Tailwind installation. Not to mention the bulky and intimidating node_modules folder.

I worked through the Tailwind docs, experimenting with CSS properties until I felt comfortable. Then I coded the homepage in desktop view — only to realize later that Tailwind is built on a mobile-first philosophy. You’re supposed to code the mobile version first, then tweak it for larger screens using responsive variants like sm:, md:, and lg:. So I had to redesign it, and that was a lesson learned the hard way.

-> React, Components, and Routing
After getting comfortable with styling, the next step was learning how to build reusable components instead of rewriting the same code repeatedly. This meant shifting from blindly typing out code to thinking carefully about whether a div could be reused, how it would fit into the component hierarchy, and which parts should stay consistent versus which parts needed to change.

For example, the blog cards on this site share the same structure and design, but the actual content - title, subtitle, and dates differ. That’s where Props come in — they allow you to pass data into components so they stay reusable. It’s similar to writing a function and then calling it with different arguments. 

On the other hand, when data changes inside a component (like the value of a counter or a like button), that’s handled with State. State is like the memory of a component — it stores values that can change over time as the user interacts with it.

To set up routing and dynamic URLs, I used React Router Dom. Notice how the page doesn’t reload when you navigate to another page? That’s because React Router DOM enables client-side routing in single-page applications, which allows smoother user interactions and faster loading times. 

In short, I really appreciate how thoughtfully React was designed — a simple yet powerful tool.

-> Storage, GitHub, and Deployment
Currently, as I write this, the blog contents are saved in local storage files. But I do have a few options in mind that I can later switch to, partly because the formatting of the blog content on this page that you're reading can be improved. Not to mention the possibility of adding images in the future. 

Learning Git and GitHub through this project has been incredibly fruitful. I've gained a practical understanding of what each command does, and more importantly, the 'why' behind using them. When you first learn about them, they all feel so theoretical and abstract, like "What do you even mean I've got a merge conflict from GitHub?!" The only conflict I sensed was cognitive, trying to merge these new concepts into my understanding! But all of that eventually got better.

I thought deploying your website had a steep learning curve and would take a lot of time, and once you've deployed, nothing could be changed. But I was glad to be mistaken. One of my friends told me deploying on Vercel takes up no more than 5 minutes, since it pulls the code directly from your GitHub repository.  So — dramatic pause — I finally deployed the project and opened the link on my phone. That moment felt really great (after fixing a few responsiveness issues, obviously). But in hindsight, I think that’s development in a nutshell: thinking you’re completely stuck until suddenly, you’re not.
`
  },

  {
    id: 5678,
    slug: "the-first-time-deployment-fought-back",
    title: "The First Time Deployment Fought Back",
    subtitle: "How a slow-loading website introduced me to new concepts",
    date: "January 24, 2026",
    content: `
Once upon a time, everything on this blog website worked.

The site loaded, the UI felt fine, the blogs existed. Except when you opened the website, the blogs took 15–20 seconds to show up. I assumed maybe there was something wrong with the code. Turns out, it wasn’t the case.

# The Existing Setup

My setup was simple:
- Frontend on Vercel
- Backend on Render
- Database on MongoDB

The frontend loaded instantly, but the backend took its time responding, especially on the first request after some inactivity. This wasn’t a bug. It was something known as a “cold start.”

# Cold Starts: A New Concept Unlocked

On Render’s free tier, backend servers go to sleep when they’re idle. When a request comes in later, the server has to wake up, reload dependencies, reconnect to the database, and only then process the request. That “wake up” time was responsible for the delay. Once the server was up, everything felt fast again, until it again went idle after some inactivity.

# Why “Just Pay for It” Isn’t Always the Answer

I thought I would have to upgrade to a paid plan that keeps the server running. But as a student, taking up a billing plan isn’t really feasible, and honestly, not recommended when you don’t fully understand how pricing works yet. Server costs aren’t just monthly subscriptions. They depend on compute time, memory usage, requests, execution duration, etc.

# Going Serverless

My friends suggested making the backend "serverless". At first, that sounded like “no servers at all,” which made no sense. Turns out, it just means servers exist, but you don’t manage them. The platform handles the execution for you. Since my frontend was already deployed on Vercel, moving backend logic there started to feel like a natural next step. On Render, my backend was a long-running server that went to sleep on the free tier, causing slow cold starts when it had to wake up again. But with serverless on Vercel, there’s no always-on server and each request just runs a function on demand and shuts down after, which is much lighter. 

# Why Next.js Fits This Setup

So now switching to Next.js and deploying everything on Vercel made the most sense. Having the frontend, backend API routes, and deployment in a single codebase feels cleaner than juggling multiple services. Since my frontend is already on Vercel, moving the backend logic there just reduces friction. 

Of course, this does mean leaning more into the Vercel ecosystem, which introduces the idea of "vendor lock-in", another term I hadn’t really thought about before all this. When your app starts depending heavily on platform-specific features, moving away later can get tricky.

The upside to this is learning how to reuse my existing code, organize it properly in a Next.js project, and actually understand how everything fits together. That said, we’ll cross the Vercel “vendor lock-in problem" bridge when we get to it.

# A Temporary Fix

While figuring this out, I temporarily deployed a previous stable version of the site that relied on locally stored blog data. Not ideal, but better than a site that feels broken.

## What I Took Away From This

This wasn’t just a performance issue. It was my introduction to deployment: cold starts, hosting tiers, pricing models, and architectural decisions. Things I hadn’t really thought about until now.

I’m still learning this side of development, but that’s part of the process. Sometimes, the most useful lessons show up after you've hit deploy.
    `

  }
]; 
