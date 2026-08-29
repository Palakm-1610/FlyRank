# FlyRank Deployment Guide

## Quick Start: Deploy to Vercel

### Option 1: Automatic Deployment (Recommended)

1. **Go to Vercel**: [https://vercel.com](https://vercel.com)
2. **Sign in or create account** using GitHub
3. **Click "New Project"**
4. **Search for "FlyRank"** repository from your GitHub account
5. **Select the repository** and click "Import"
6. **Framework Preset**: Automatically detected as Next.js ✓
7. **Environment Variables**: (Optional - can add later)
   - `NEXT_PUBLIC_APP_URL` = Your Vercel domain (auto-configured)
8. **Click "Deploy"**
9. **Wait for build to complete** (~2-3 minutes)
10. **Copy your Live Preview URL** from the deployment page

### Option 2: Using Vercel CLI

If you prefer command-line deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd "c:\Users\asd\Desktop\FlyRank\assignment 3.1"
vercel

# Follow the prompts and confirm deployment
# Your live URL will be displayed after deployment completes
```

## What Happens After Deployment

✅ **Preview URL** is created immediately (e.g., `https://flyrank-xxxx.vercel.app`)
✅ **Preview deployments** are automatically created on every push to main
✅ **Environment variables** are securely stored in Vercel dashboard
✅ **Build logs** are available for debugging

## Testing Your Deployment

Once deployed, test these routes on your live URL:

- `https://your-url.vercel.app/` - Dashboard
- `https://your-url.vercel.app/projects` - Projects page
- `https://your-url.vercel.app/tasks` - Tasks page
- `https://your-url.vercel.app/job-tracker` - Job Tracker
- `https://your-url.vercel.app/skills` - Skills & Learning
- `https://your-url.vercel.app/profile` - Profile
- `https://your-url.vercel.app/settings` - Settings
- `https://your-url.vercel.app/health-check` - Health Check (fetches external data)

## Responsive Design Validation

Test responsiveness at these breakpoints:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1280px and above

## Troubleshooting

### Build Fails on Vercel

If the build fails:
1. Check **Build & Development Settings** in Vercel dashboard
2. Verify build command is: `npm run build`
3. Verify start command is: `npm start`
4. Check environment variables are set correctly

### Preview URL Not Loading

1. Wait for build to complete (check status in Vercel dashboard)
2. Check if `.next` directory was created during build
3. Review build logs in Vercel dashboard for errors

### Environment Variables Not Working

1. Go to Vercel Project Settings → Environment Variables
2. Add any required env vars (see `.env.example`)
3. Re-deploy to apply changes

## After Deployment

**For Assignment Submission**, provide:
1. ✅ Live Preview URL (from Vercel)
2. ✅ GitHub Repository URL (https://github.com/Palakm-1610/FlyRank)
3. ✅ Confirmation that:
   - All 8 routes load without errors
   - App is responsive at 375px and 1280px
   - Health-check page fetches and displays external data
   - No secrets exposed in the repository

## Monitoring Live Deployments

After each push to GitHub:
- Vercel automatically creates a **preview deployment**
- Preview URL format: `https://flyrank-git-main-xxxx.vercel.app`
- Production URL remains stable: `https://flyrank-xxxx.vercel.app`

## Next Steps

Once deployed, you can:
- Add database integration (PostgreSQL, MongoDB)
- Implement authentication (NextAuth, Auth0)
- Add API routes in `/app/api/` directory
- Connect to external services via environment variables
- Enhance UI with more interactive components

---

**Questions?** Check [Vercel Docs](https://vercel.com/docs/deployments) or [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
