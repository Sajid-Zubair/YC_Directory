# 🚀 PitchDeck

PitchDeck is a full-stack web application built to let founders showcase their startup ideas in a sleek, modern interface. Users can submit their pitch details, formatted with Markdown, and view other submissions. The project uses a combination of powerful modern tools like Next.js (App Router), Sanity CMS, and TypeScript.

---

## ✨ Features
- 🔐 **Authentication**: GitHub login with secure session handling.
- 📝 **Pitch Submission**: Use a Markdown editor to add a startup idea.
- 📊 **Categorization**: Classify startup pitches by category.
- 📷 **Image Support**: Add a logo or banner image for each startup.
- ↺ **Dynamic Routing**: Every pitch gets a dedicated dynamic route.

---

## 🛠️ Tech Stack
- **Frontend**: React, Next.js 15 App Router, Tailwind CSS
- **Backend**: Server actions via Next.js + Zod for validation
- **CMS**: Sanity.io (for managing pitch data)
- **Auth**: GitHub OAuth (NextAuth/Auth.js)
- **Markdown**: @uiw/react-md-editor for a rich text editor experience

---

## 📚 My Learnings

Working on **PitchDeck** was a rewarding experience that helped me strengthen several technical and practical skills:

### 🔧 Technical Skills
- **Next.js (App Router)**: Gained hands-on experience with server components, server actions, and optimized routing using the new App directory structure.
- **TypeScript & Zod**: Learned how to build type-safe forms with runtime validation using Zod, ensuring data reliability on both client and server.
- **Sanity CMS**: Integrated a headless CMS for managing dynamic content and schema types, which improved my understanding of content modeling and GROQ queries.
- **Authentication**: Implemented GitHub OAuth using NextAuth and handled secure session management.
- **Markdown Editor Integration**: Successfully integrated a rich text editor (MDEditor) for pitch formatting using Markdown.

### 🌐 Full-Stack Workflow
- Learned how to design, structure, and maintain a full-stack application from scratch.
- Managed state across server actions and client components using `useActionState` and React hooks.

---

## 🚀 Getting Started
1. Clone the repository
```bash
git clone https://github.com/Sajid-Zubair/YC_Directory.git
cd yc_directory
```
2. Install dependencies:
```bash
npm install
```
3. Set up environment variables:
- Create a `.env.local` file in the root directory and add the following:

```env
# GitHub OAuth credentials (from https://github.com/settings/developers)
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Auth.js (NextAuth) secret key
NEXTAUTH_SECRET=your_random_secret_key

# Auth.js (NextAuth) configuration URL
NEXTAUTH_URL=http://localhost:3000

# Sanity Project ID and Dataset
SANITY_PROJECT_ID=your_sanity_project_id
SANITY_DATASET=production

# Sanity Read Token (with read permission)
SANITY_API_READ_TOKEN=your_sanity_token

# Optional (if using Write Client in development)
SANITY_API_WRITE_TOKEN=your_sanity_write_token
```

You can generate the `NEXTAUTH_SECRET` using:
```bash
openssl rand -base64 32
```

Make sure your GitHub OAuth App has the following redirect URI:
```
http://localhost:3000/api/auth/callback/github
```

4. Run the development server:
```bash
npm run dev
```

---