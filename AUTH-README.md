# Basic Authentication Setup

## 🔒 Password Protection

The website is now protected with a password during development. This is a **client-side authentication** suitable for protecting a development preview from casual visitors.

## Current Password

**Default Password:** `swimperhentian2026`

## How It Works

1. When visitors access the site, they see a password prompt
2. The correct password must be entered to view the content
3. The authentication is stored in `sessionStorage` (expires when browser tab closes)
4. No cookies, no server-side processing required

## Changing the Password

Edit `/src/lib/Auth.svelte` and change the `CORRECT_PASSWORD` constant:

```typescript
const CORRECT_PASSWORD = 'your-new-password-here';
```

Then rebuild and redeploy:

```bash
npm run build
git add .
git commit -m "Update password"
git push
```

## Removing Authentication

When ready to make the site public:

1. Edit `/src/App.svelte`
2. Remove the Auth import:
   ```typescript
   import Auth from './lib/Auth.svelte';
   ```
3. Remove the `<Auth>` wrapper tags at the beginning and end
4. Rebuild and deploy

Or keep the file but just change the password to something easily guessable, or add a bypass for certain conditions.

## Security Considerations

⚠️ **Important:** This is NOT secure authentication!

- The password is stored in the JavaScript bundle (visible in source code)
- Anyone who inspects the network/source can find the password
- Suitable for: Hiding development sites from search engines and casual visitors
- NOT suitable for: Protecting sensitive data or production sites

For true security, use:
- Server-side authentication
- Environment variables
- OAuth/JWT tokens
- Proper backend authentication system

## Features

✅ Clean, branded login UI using DaisyUI  
✅ Password visibility toggle  
✅ Error handling for incorrect passwords  
✅ Session-based authentication (doesn't persist across browser restarts)  
✅ Mobile-responsive design  
✅ Displays event information on login screen

## Testing

**Development:**
```bash
npm run dev
```
Visit http://localhost:5173 and you'll see the password prompt.

**Production:**
The same authentication will work on the deployed GitHub Pages site at swimperhentian.com.

## User Experience

When protected:
1. User visits the site
2. Sees a branded password entry screen
3. Enters password
4. If correct: sees the full website
5. If incorrect: sees error message and can retry

The authentication persists for the browser session only. Closing the tab or browser will require re-authentication.

