# Vercel Deployment Fix TODO

## Steps:
- [x] 1. Edit frontend/package.json: Downgrade React/@types to 18, fix eslint-config-next, add overrides.
- [x] 2. Create frontend/.npmrc with legacy-peer-deps=true.
- [x] 3. Run `cd frontend && rm -rf node_modules package-lock.json && npm install` and verify no peer conflicts (`npm ls`).
- [ ] 4. Fix remaining TS error in HowItWorks.tsx (change ease: string -> ease: ["easeOut"]).
- [ ] 5. Commit and redeploy to Vercel.
- [ ] 6. Confirm successful deployment.
