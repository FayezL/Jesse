# 🧪 Test Your App Locally (Before Deploying)

## Quick Test (Windows)

### Option 1: Simple Double-Click

1. Open your project folder
2. Double-click `index.html`
3. It opens in your default browser!
4. Test the chicken clicking and messages

### Option 2: Using Python (if you have it)

1. Open PowerShell in your project folder
2. Run: `python -m http.server 8000`
3. Open browser to: `http://localhost:8000`
4. More realistic testing environment

### Option 3: Using Node.js (if you have it)

1. Install: `npm install -g live-server`
2. In project folder: `live-server`
3. Automatically opens browser and refreshes on changes

## What to Test ✅

- [ ] Page loads with cute pink background
- [ ] Yassmen's name appears correctly
- [ ] Chicken is visible and animated
- [ ] Clicking chicken shows messages
- [ ] Messages rotate through different ones
- [ ] Pizza and pepper decorations visible
- [ ] Responsive on mobile (resize browser window)
- [ ] Music button appears (music won't work locally)
- [ ] "Made with ❤️ by Fayez" appears at bottom

## Common Issues

**Chicken doesn't respond to clicks:**

- Check browser console (F12) for errors
- Make sure `script.js` is in same folder

**Styling looks broken:**

- Make sure `styles.css` is in same folder
- Check file names match exactly (case-sensitive)

**Fonts look basic:**

- Normal! Google Fonts need internet connection
- Will look perfect once deployed

---

**Everything working?** Time to deploy! 🚀
