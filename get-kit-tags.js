#!/usr/bin/env node

/**
 * Kit Tag ID Fetcher
 * 
 * This script fetches all your Kit tags and their IDs to make it easy to
 * configure the subject-based tagging in your contact form.
 * 
 * Usage:
 *   node get-kit-tags.js
 * 
 * Make sure you have your Kit API key in your .env file as KIT_API_KEY
 */

require('dotenv').config();
const https = require('https');

const API_KEY = process.env.KIT_API_KEY;

if (!API_KEY) {
  console.error('\n❌ Error: KIT_API_KEY not found in environment variables');
  console.error('\nPlease make sure you have a .env file with your Kit API key:');
  console.error('KIT_API_KEY=your_api_key_here\n');
  process.exit(1);
}

console.log('\n🔍 Fetching your Kit tags...\n');

const url = `https://api.convertkit.com/v3/tags?api_key=${API_KEY}`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      if (response.tags && Array.isArray(response.tags)) {
        console.log('✅ Successfully retrieved your Kit tags!\n');
        console.log('=' .repeat(80));
        console.log('YOUR KIT TAGS');
        console.log('=' .repeat(80));
        
        // Sort tags by name for easier reading
        const sortedTags = response.tags.sort((a, b) => 
          a.name.localeCompare(b.name)
        );

        // Display tags in a table format
        console.log('\n');
        sortedTags.forEach(tag => {
          const totalSubs = tag.total_subscriptions || 0;
          console.log(`Tag Name: ${tag.name}`);
          console.log(`Tag ID:   ${tag.id}`);
          console.log(`Subscribers: ${totalSubs}`);
          console.log('-'.repeat(80));
        });

        console.log('\n');
        console.log('=' .repeat(80));
        console.log('SUBJECT TAG MAPPING');
        console.log('=' .repeat(80));
        console.log('\nCopy and paste this into your src/pages/Home.js file:');
        console.log('(Replace the placeholder IDs with the actual tag IDs above)\n');
        
        console.log('const subjectTagMap = {');
        
        // Try to match tags to subjects based on naming
        const subjects = [
          'General Contact',
          'Coaching & Discipleship',
          'Heaven in Health Conferences',
          'Corporate Wellness & Culture Seminars',
          'Prison Workshops & Inmate Equipping',
          'Give',
          'Prayer Request',
          'Submit a Testimony',
          'Join the Mailing List',
          'Volunteer'
        ];

        subjects.forEach(subject => {
          // Try to find matching tag
          let matchedTag = sortedTags.find(tag => {
            const tagLower = tag.name.toLowerCase();
            const subjectLower = subject.toLowerCase();
            return tagLower.includes(subjectLower.substring(0, 10)) ||
                   tagLower.includes('website') && tagLower.includes(subjectLower.split(' ')[0].toLowerCase());
          });

          if (matchedTag) {
            console.log(`  '${subject}': '${matchedTag.id}', // ${matchedTag.name}`);
          } else {
            console.log(`  '${subject}': 'YOUR_TAG_ID_HERE', // No matching tag found`);
          }
        });

        console.log('};\n');

        console.log('\n📋 SPECIAL TAGS (Already configured):');
        console.log('  Marketing tag ID: 13625660');
        console.log('  No Marketing tag ID: 13625657\n');

        console.log('💡 TIP: Look for tags starting with "Website" in the list above.');
        console.log('    These likely correspond to your contact form subjects.\n');

      } else {
        console.error('❌ Unexpected response format from Kit API');
        console.error('Response:', data);
      }
    } catch (error) {
      console.error('❌ Error parsing Kit API response:', error.message);
      console.error('Raw response:', data);
    }
  });

}).on('error', (error) => {
  console.error('❌ Error connecting to Kit API:', error.message);
  console.error('\nPlease check:');
  console.error('1. Your internet connection');
  console.error('2. Your Kit API key is valid');
  console.error('3. You have the correct permissions on your Kit account\n');
});

