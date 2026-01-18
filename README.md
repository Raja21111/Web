# NEXERA - AI Cybersecurity SaaS Platform

A fully functional cybersecurity SaaS platform simulator built with Next.js 15, Tailwind CSS, and shadcn/ui.

## 🚀 Key Features

- **Port Scanner**: Real-time port scanning using Node.js backend.
- **Phishing Guard**: Live URL analysis with SSL verification and heuristics.
- **Threat Map**: Live botnet feed visualization using Abuse.ch data.
- **Interactive Dashboards**: Client and Admin portals.

## 🔐 Credentials & Access

### 1. Client Portal
- **URL**: [/login](http://localhost:3000/login)
- **Access**: Click "Client Login" or "Get Started".

### 2. Admin Portal (Backdoor)
- **URL**: [/secure-admin-login](http://localhost:3000/secure-admin-login)
- **Note**: This is a hidden route not linked in the main UI. 
- **Interface**: Features a "Terminal" style hacker interface.

## 🛠️ Deployment on Vercel

1.  **Push to GitHub**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    # Push to your remote repository
    ```

2.  **Deploy**:
    - Import repo to Vercel.
    - Framework: **Next.js**.
    - Build Command: `next build` (Default).
    - **IMPORTANT**: If your build fails on linting, you can disable it in `next.config.js` or fix errors locally.

## 📂 Tech Stack

- **Frontend**: Next.js 15, Tailwind, Framer Motion, Lucide, Recharts.
- **Backend API**: Next.js API Routes (Node.js/Edge).
- **Libraries**: `axios`, `ssl-checker`, `net`.
