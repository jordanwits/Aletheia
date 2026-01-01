#!/usr/bin/env node

// Skip react-snap in CI environments (Vercel, GitHub Actions, etc.)
if (process.env.CI || process.env.VERCEL) {
  console.log('Skipping react-snap in CI environment...');
  process.exit(0);
}

// Run react-snap in local builds
const { execSync } = require('child_process');
try {
  execSync('react-snap', { stdio: 'inherit' });
} catch (error) {
  console.error('react-snap failed:', error.message);
  process.exit(1);
}

