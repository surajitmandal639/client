This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

src/
├── app/                         # ১. Routing (Next.js App Router)
│   ├── (auth)/
│   │   └── login/page.jsx
│   │
│   ├── (dashboard)/
│   │   ├── layout.jsx           # Protected layout (sidebar etc.)
│   │   ├── page.jsx             # Dashboard home
│   │   └── users/
│   │       ├── page.jsx         # Users list
│   │       └── [id]/page.jsx    # User details
│   │
│   ├── layout.jsx               # Root layout (AppProviders here)
│   └── page.jsx                 # Landing page

├── modules/                     # 🔥 Feature-based architecture
│   ├── auth/
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── providers/
│   │   │   └── AuthProvider.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js (optional)
│   │   └── components/
│   │       └── LoginForm.jsx
│   │
│   ├── users/
│   │   ├── services/
│   │   │   └── userService.js
│   │   ├── hooks/
│   │   │   ├── useUsers.js
│   │   │   └── useUser.js
│   │   ├── components/
│   │   │   ├── UserTable.jsx
│   │   │   └── UserForm.jsx
│   │   └── utils/
│   │       └── userHelpers.js

├── components/                  # ২. Shared UI
│   ├── ui/                      # Button, Input, Modal
│   └── shared/                  # Navbar, Footer, Loader

├── providers/                   # ৩. Global providers
│   └── AppProviders.jsx         # combine সব provider

├── services/                    # ৪. Core API layer
│   └── api.js                   # axios config (baseURL, interceptors)

├── lib/                         # ৫. Helpers / configs
│   └── utils.js

├── middleware.js                # ৬. Route protection

└── .env.local                   # ৭. Env variables



