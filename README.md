# Blog Application with Next.js and Tailwind CSS

This project is a lightweight blog application built with Next.js 13 and styled with Tailwind CSS. It fetches blog posts from the JSONPlaceholder API and allows users to view and read more details about each post. 

## Features

- **Homepage**:
  - **Fetch**: Fetch a list of blog posts from the JSONPlaceholder API.
  - **Display**: Display the posts in a responsive grid layout with Tailwind CSS.
  - **Display Features**: Each blog post card includes: a Title (as a clickable link to the post's details page), the first 100 characters of the body, and a "Read More" link directing to the post details page.

- **Post Details Page**:
  - **Dynamic Routing**: Create a dynamic route displaying the full post details, including a title, full body, Post ID, and author.

- **Search Functionality**: Filter posts by title using an input field.

- **Responsive Design**: Fully responsive, adapting to desktop, tablet, and mobile layouts using Tailwind CSS.

- **Navigation**: Navigation bar with links to Home (/) and a placeholder About (/about) page.

- **Navigation Features**: Highlight the active route using Tailwind's active class.

## Development

### Setting Up Locally

Clone the repository:

```bash
git clone https://github.com/EmanuelGarciaDev/test-task-frontend-developer.git
cd test-task-frontend-developer
```

Install dependencies:

```
npm install
```

### Building the Project

Build the TypeScript code to JavaScript:

```
npm run build
```

### License

- MIT License

## Tech Stack
- Next.js 13
- Tailwind CSS
- React
- JSONPlaceholder API

## Build Results

Here are the results from the latest build of the application:

### Route (app)

Route (app)                                Size     First Load JS
┌ ○ /                                      6.92 kB        83.8 kB
├ ○ /favicon.ico                           0 B                0 B
└ λ /post/[id]                             137 B          77.1 kB
+ First Load JS shared by all              76.9 kB
  ├ chunks/139-1a84ca5c2ef8989a.js         24.5 kB
  ├ chunks/2443530c-5211866815ab9e96.js    50.5 kB
  ├ chunks/main-app-b2156cf0d1b07269.js    211 B
  └ chunks/webpack-5ab2db368106a6cc.js     1.74 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   178 B            86 kB
+ First Load JS shared by all              85.9 kB
  ├ chunks/main-baa976299fb597e3.js        83.9 kB
  ├ chunks/pages/_app-c544d6df833bfd4a.js  192 B
  └ chunks/webpack-5ab2db368106a6cc.js     1.74 kB

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)

