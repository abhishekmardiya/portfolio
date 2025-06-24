import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm Abhishek
I'm a Software Developer Engineer with a strong focus on JavaScript, especially in the React and Next.js ecosystem. I enjoy building fast, responsive, and user-friendly web applications that make a real impact.

With a few years of experience under my belt, I've worked on everything from dynamic UIs to API integrations — always aiming for clean, maintainable code. I keep up with modern frontend trends, love refining performance, and never say no to a well-organized codebase.

Outside of coding, I like exploring new tools, simplifying workflows, and occasionally getting excited over a perfect Lighthouse score.

Focused on building useful things. Always learning. Always shipping..`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
