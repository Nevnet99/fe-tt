## Project Overview

This project is a web application that allows users to fine-tune a model using a dataset of reviews.

### Technologies Used

- Next.js
- Tailwind CSS
- TypeScript
- Tailwind
- react-hook-form
- vitest
- storybook
- zod
- axios
- react-query
- react-hot-toast


### Known issues

- Not using typescript alias paths (it was throwing errors in the tests, and I decided to focus on the task rather than clean imports).
- Arrow on the Select component, I could switch it over to an icon, but it seemed overkill for this task.
- Correct Icon sizing, Some of the component I have just reused a similar icon of the same size, Ideally in a real project I would use something like material symbols and just have an icon component that can be reused. 

### What I would've done with more time 
- Docs, a lot of them, most of the components are self-explanatory, but some of the more complex ones could do with a few more words in the storybook and how they would be planned to be used to scale 
- The coverage is good, however there is still room for E2E tests (either in storybook or just with playwright)
- CI/CD, Could've deployed the app to vercel and ran the build and tests on PR.
- Error states, could be more pretty but they serve their purpose for this task.
- More a11y, I've added a few aria attributes here and there, but I could've added more.
- Potentially rename Card to Paper as I worked more on the task, it evolved into a more general component.
- For the future there is potential to move some of the date logic into the utils folder, just to handle it across the board,
but since it's just used in the table in this example I decided to leave it with the table.
- Loading states, could be a bit more pretty also, but serve their purpose.
- Suspense, I could clean up some of the components to be suspenseful, but it's just not in my workflow yet. 
  



## Getting Started

```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```bash
npm run storybook
```




