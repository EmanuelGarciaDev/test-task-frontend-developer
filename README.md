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
