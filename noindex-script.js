/**
 * @description: Script for finding current Meta Robots tag and replacing it's content with noindex, noodp, noydir
 * @author: Darius Burgan
 */

// Search DOM <head> section for meta tag with name 'robots'. 
// Then replace the content of that meta tag with 'noindex, noodp, and noydir.
// Feel free to replace the the content='....' section with whatever you'd like the meta robots tag to be.
document.head.querySelector("meta[name='robots']").content='noindex, noodp, noydir';