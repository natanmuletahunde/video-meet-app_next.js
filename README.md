# 📹 video-meet-app\_next.js

A real-time video conferencing application built with **Next.js**, **Stream Video SDK**, **Clerk Auth**, and **Tailwind CSS**. Designed for seamless virtual communication, personal meeting rooms, instant meeting creation, and scheduled conferences.

---

## 🚀 Features

* 🔒 **Authentication** using Clerk
* 📞 **Video calls** powered by Stream Video SDK
* 🧑‍🤝‍🧑 Personal meeting rooms
* 📅 Schedule & manage meetings
* 🔗 Instant meeting link sharing
* 📋 Meeting recording UI (optional)
* ⚡ Optimized with Next.js App Router
* 💅 Styled with Tailwind CSS
* 🍞 Toast notifications via Sonner

---

## 🛠️ Tech Stack

| Tool/Library     | Description                        |
| ---------------- | ---------------------------------- |
| Next.js          | React framework for production     |
| TypeScript       | Static typing                      |
| Tailwind CSS     | Utility-first CSS framework        |
| Stream Video SDK | Video calling & meeting API        |
| Clerk            | User authentication & management   |
| Sonner           | Toast notifications                |
| Shadcn UI        | Reusable, accessible UI components |
| React Datepicker | Schedule meeting date/time         |

---

## 📸 Screenshots

> Replace the placeholders with actual PNGs from your `public/` or `assets/` folder:

| Dashboard                                   | Schedule Meeting                          | Join Meeting                      |
| ------------------------------------------- | ----------------------------------------- | --------------------------------- |
| ![Dashboard](./public/images/dashboard.png) | ![Schedule](./public/images/schedule.png) | ![Join](./public/images/join.png) |

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/video-meet-app_next.js.git
cd video-meet-app_next.js
```

2. **Install dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
STREAM_SECRET=your_stream_secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. **Run development server**

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Development Tips

* Modify the home UI in `app/page.tsx`
* Use `components/ui/` for all reusable UI
* All meetings are managed via Stream Call
* Auth flows are powered by Clerk

---

## 📤 Deployment

The easiest way to deploy this project is using **[Vercel](https://vercel.com/)**:

```bash
npx vercel
```

Or connect your GitHub repo directly to Vercel for CI/CD.

---

## 📚 Learn More

* [Next.js Documentation](https://nextjs.org/docs)
* [Stream Video Docs](https://getstream.io/video/docs/)
* [Clerk Docs](https://clerk.dev/docs)
* [Tailwind CSS](https://tailwindcss.com/docs)
* [Shadcn UI](https://ui.shadcn.dev)

---

## 💡 Contribution

Feel free to fork, submit issues or open PRs. All contributions are welcome!

---

## 🧾 License

MIT © [Your Name](https://github.com/yourusername)
