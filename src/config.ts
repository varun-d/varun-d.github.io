import type { ThemeConfig } from './types'

export const themeConfig: ThemeConfig = {
  site: {
    website: 'https://varun-d.github.io/', // Site domain
    title: 'Varun Dhanwantri', // Site title
    author: 'Varun D', // Author name
    description: 'My engineering journey with Astro', // Site description
    language: 'en-US' // Default language
  },

  general: {
    contentWidth: '35rem', // Content area width
    centeredLayout: true, // Use centered layout (false for left-aligned)
    themeToggle: true, // Show theme toggle button (uses system theme by default)
    postListDottedDivider: true, // Show dotted divider in post list
    footer: true, // Show footer
    fadeAnimation: true // Enable fade animations
  },

  date: {
    dateFormat: 'YYYY-MM-DD', // Date format: YYYY-MM-DD, MM-DD-YYYY, DD-MM-YYYY, MONTH DAY YYYY, DAY MONTH YYYY
    dateSeparator: '.', // Date separator: . - / (except for MONTH DAY YYYY and DAY MONTH YYYY)
    dateOnRight: true // Date position in post list (true for right, false for left)
  },

  // POST SETTINGS ///////////////////////////////////////////////////////////////////////////////////////
  post: {
    readingTime: false, // Show reading time in posts
    toc: true, // Show the table of contents (when there is enough page width)
    imageViewer: true, // Enable image viewer
    copyCode: true // Enable copy button in code blocks
  }
}
