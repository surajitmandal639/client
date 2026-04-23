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
├── app/                 # ১. রাউটিং এবং পেজ (Routing)
│   ├── (auth)/          # লগইন, রেজিস্ট্রেশন (URL-এ দেখাবে না)
│   │   └── login/page.jsx
│   ├── (dashboard)/     # ড্যাশবোর্ড এবং প্রোফাইল (সুরক্ষিত পেজ)
│   │   ├── layout.jsx   # ড্যাশবোর্ডের সাইডবার/লেআউট
│   │   └── profile/page.jsx
│   ├── layout.js        # মেইন লেআউট (যেখানে Providers থাকবে)
│   └── page.js          # ল্যান্ডিং পেজ
├── components/          # ২. পুনরায় ব্যবহারযোগ্য UI (Components)
│   ├── ui/              # ছোট ছোট বাটন, ইনপুট (Atomic)
│   ├── modules/         # লগইন ফর্ম বা প্রজেক্ট টেবিলের মতো বড় অংশ
│   └── shared/          # নেভিগেশন বার, ফুটার, লোডার
├── providers/           # ৩. গ্লোবাল স্টেট (লারাভেল প্রোভাইডার কনসেপ্ট)
│   ├── AppProviders.jsx # সব প্রোভাইডারের মাস্টার ফাইল
│   ├── AuthProvider.jsx # লগইন এবং টোকেন স্টেট
│   └── ThemeProvider.jsx# ডার্ক মোড এবং ল্যাঙ্গুয়েজ
├── services/            # ৪. এপিআই কল এবং লজিক (API Layer)
│   ├── api.js           # আপনার সেই Fetch Wrapper (বেস ফাইল)
│   ├── authService.js   # লগইন/লগআউট এপিআই কল
│   └── projectService.js# MSBY প্রজেক্ট সংক্রান্ত কল
├── hooks/               # ৫. কাস্টম হুক (যেমন: useAuth)
├── lib/                 # ৬. থার্ড পার্টি কনফিগ এবং হেল্পার (utils.js)
├── middleware.js        # ৭. সিকিউরিটি গেটকিপার (Route Protection)
└── .env.local           # ৮. এপিআই ইউআরএল এবং সিক্রেট



