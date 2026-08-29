# FlyRank - Student Career & Productivity Dashboard

A comprehensive web application designed to help college students manage their projects, tasks, skills, and job/internship applications in one unified platform.

## Features

- **Dashboard**: Overview of your academic and career progress
- **Projects**: Create and manage academic and personal projects
- **Tasks**: Organize your to-do list with priorities and deadlines
- **Job & Internship Tracker**: Monitor your job applications and interviews
- **Skills & Learning**: Track skill development and learning progress
- **Profile**: Manage your professional profile and education
- **Settings**: Customize preferences and notifications
- **Health Check**: Monitor system status and external data fetching

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Design Tokens**: Custom Tailwind theme with primary (blue), secondary (gray), and accent (emerald) colors

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Palakm-1610/FlyRank.git
cd FlyRank
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Responsive Design

- **Mobile**: Fully responsive at 375px and below
- **Tablet**: Optimized for 768px and up
- **Desktop**: Enhanced layout at 1280px and above

## Project Structure

```
app/
├── layout.tsx           # Root layout with navigation
├── globals.css          # Global styles and Tailwind directives
├── page.tsx             # Dashboard/Home page
├── projects/
│   └── page.tsx         # Projects page
├── tasks/
│   └── page.tsx         # Tasks page
├── job-tracker/
│   └── page.tsx         # Job & Internship Tracker
├── skills/
│   └── page.tsx         # Skills & Learning page
├── profile/
│   └── page.tsx         # Profile page
├── settings/
│   └── page.tsx         # Settings page
└── health-check/
    └── page.tsx         # Health check page with data fetching

components/
└── Navigation.tsx       # Client component for navigation

tailwind.config.ts       # Tailwind configuration with design tokens
postcss.config.js        # PostCSS configuration
next.config.js          # Next.js configuration
tsconfig.json           # TypeScript configuration
package.json            # Dependencies and scripts
```

## Environment Variables

See `.env.example` for all available configuration options:
- `NEXT_PUBLIC_APP_NAME`: Application name
- `NEXT_PUBLIC_APP_URL`: Application URL
- `NEXT_PUBLIC_API_URL`: API endpoint
- Database and authentication credentials (when implemented)

## Server & Client Components

- **Server Components** (default): Used for static pages and data fetching (Dashboard, Projects, Tasks, etc.)
- **Client Components** (Navigation): Used only where interactivity is required (Navigation with active link tracking)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy!

Preview deployments are automatically created on every push.

### Other Platforms

The app can be deployed to any Node.js hosting platform (Netlify, Heroku, AWS, etc.).

## Design Tokens

The application uses a carefully chosen color palette:
- **Primary**: Blue (#3b82f6) - Main actions and highlights
- **Secondary**: Gray (#6b7280) - Text and neutral elements
- **Accent**: Emerald (#22c55e) - Success states and secondary highlights

Customize these in `tailwind.config.ts` under `theme.extend.colors`.

## License

MIT

## Author

Palak M - Student Career & Productivity Dashboard

## Support

For issues or questions, please open an issue on GitHub.
