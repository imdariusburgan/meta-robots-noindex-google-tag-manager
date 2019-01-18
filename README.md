# Noindex Pages via Google Tag Manager
The script in this project will allow you to update the Meta Robots tag and change it to noindex without editing the website.

## Why Use This Script?
This script was made specifically for SEO's who work inside a non-flexible CMS or do not have access to edit the full HTML content of a page.

## How To Use This Script
To use this script inside Google Tag Manager, you're going to follow the following steps:
1. Add a new tag
2. Edit the tag's configuration and choose the tag's type
3. Select 'Custom HTML' as the tag type
4. In the HTML box, add the following code:
```
<script>
document.head.querySelector("meta[name='robots']").content='noindex, noodp, noydir';
</script>
```

## Can I Customize This Script?
Feel free to customize this script as needed. If you're interested in changing the meta tag to something other than noindex, refer to the JS script in this project for help.