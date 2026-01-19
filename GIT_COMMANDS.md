# Git Commands to Push to GitHub

Run these commands in your terminal (PowerShell or Git Bash) to push your code to GitHub:

## Step 1: Initialize Git Repository (if not already initialized)
```bash
git init
```

## Step 2: Add All Files
```bash
git add .
```

## Step 3: Create Initial Commit
```bash
git commit -m "Initial commit: Portfolio website"
```

## Step 4: Add Remote Repository
```bash
git remote add origin git@github.com:mahima-shrivastava/mahima_shrivastava.git
```

## Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Alternative: If you haven't set up SSH keys, use HTTPS instead:
```bash
git remote add origin https://github.com/mahima-shrivastava/mahima_shrivastava.git
git push -u origin main
```

## Troubleshooting

### If you get authentication errors:
1. **For SSH**: Make sure you have SSH keys set up with GitHub
2. **For HTTPS**: You'll need to use a Personal Access Token instead of password

### If the repository doesn't exist:
1. Go to https://github.com/mahima-shrivastava
2. Create a new repository named `mahima_shrivastava`
3. Don't initialize it with README, .gitignore, or license
4. Then run the commands above
