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

And thus began the flood of npm commands — and the inevitable “command not found” errors — during the Tailwind installation. Not to mention the bulky and intimidating node_modules folder. But honestly, NPM and Node are only now starting to make sense as I’ve begun to explore backend.

I worked through the Tailwind docs, experimenting with CSS properties until I felt comfortable. Then I coded the homepage in desktop view — only to realize later that Tailwind is built on a mobile-first philosophy. You’re supposed to code the mobile version first, then tweak it for larger screens using responsive variants like sm:, md:, and lg:. So I had to redesign it, and that was a lesson learned the hard way.

-> React, Components, and Routing
After getting comfortable with styling, the next step was learning how to build reusable components instead of rewriting the same code repeatedly. This meant shifting from blindly typing out code to thinking carefully about whether a div could be reused, how it would fit into the component hierarchy, and which parts should stay consistent versus which parts needed to change.

For example, the blog cards on this site share the same structure and design, but the actual content - title, subtitle, and dates differ. That’s where Props come in — they allow you to pass data into components so they stay reusable. It’s similar to writing a function and then calling it with different arguments. On the other hand, when data changes inside a component (like the value of a counter or a like button), that’s handled with State. State is like the memory of a component — it stores values that can change over time as the user interacts with it.

To set up routing and dynamic URLs, I used React Router Dom. Notice how the page doesn’t reload when you navigate to another page? That’s because React Router DOM enables client-side routing in single-page applications, which allows smoother user interactions and faster loading times. In short, I really appreciate how thoughtfully React was designed — a simple yet powerful tool.

-> Storage, GitHub, and Deployment
Currently, as I write this, the blog contents are saved in local storage files. But I do have a few options in mind that I can later switch to, partly because the formatting of the blog content on this page that you're reading can be improved. Not to mention the possibility of adding images in the future. 

Learning Git and GitHub through this project has been incredibly fruitful. I've gained a practical understanding of what each command does, and more importantly, the 'why' behind using them. When you first learn about them, they all feel so theoretical and abstract, like "What do you even mean I've got a merge conflict from GitHub?!" The only conflict I sense is cognitive, trying to merge these new concepts into my understanding, but all of that eventually got better.

I thought deploying your website had a steep learning curve and would take a lot of time, and once you've deployed, nothing could be changed. But I was glad to be mistaken. One of my friends told me deploying on Vercel takes up no more than 5 minutes, since it pulls the code directly from your GitHub repository.  So — dramatic pause — I finally deployed the project and opened the link on my phone. That moment felt great. In hindsight, maybe that’s development in a nutshell: thinking you’re completely stuck until suddenly, you’re not.
`
  },
]; 
