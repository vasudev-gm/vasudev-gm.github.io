# Hexo Blog Automated Test Suite

This directory contains automated tests for the Hexo blog using Node.js and Mocha framework. The tests ensure that the blog functions correctly across different platforms and environments.

## Test Coverage

The test suite validates:

### 1. NPM Dependencies Installation

- Verifies all required Hexo dependencies are installed
- Confirms essential plugins (hexo-generator-index, hexo-server) are available

### 2. Configuration Files Validation

- Validates `_config.yml` exists and contains required Hexo configuration
- Validates `_config.next.yml` (NexT theme config) exists and contains valid settings

### 3. Hexo Post Creation

- Tests successful creation of new Hexo posts
- Verifies proper markdown structure and front matter

### 4. Hexo Site Clean and Generation

- Tests site cleaning functionality
- Verifies site generation produces expected output

### 5. HTML Markup Validation

- Checks that `public/index.html` exists and contains valid HTML
- Verifies NexT theme elements are properly integrated

### 6. Post Rendering Verification

- Ensures existing posts are rendered to HTML in public folder
- Validates post HTML structure and content

### 7. Site Structure and Navigation

- Verifies essential pages (index, archives, about) are generated
- Checks sitemap.xml and RSS feed generation

### 8. Platform Independence and Robustness

- Tests Hexo CLI accessibility
- Verifies consistent build output
- Validates theme assets generation
- Checks robots.txt formatting
- Tests internal link integrity

### 9. Performance and Content Validation

- Verifies HTML files have substantial content
- Checks CSS/JS asset optimization
- Validates SEO meta tags presence

## Requirements

- Node.js (any version with npm)
- All project dependencies installed (`npm install`)

## Running Tests

```bash
# Run all tests
npm test

# Run tests with verbose output
npx mocha test/**/*.test.js --timeout 30000 --reporter spec
```

## Platform Independence

These tests are designed to run on any operating system with Node.js installed:

- Windows
- macOS
- Linux

The tests use platform-independent file path handling and do not rely on OS-specific commands.

## Test Structure

- **Timeout**: 30 seconds per test (configurable for long-running builds)
- **Framework**: Mocha with Node.js built-in assert module
- **Cleanup**: Tests clean up after themselves (removes temporary posts)
- **Isolation**: Tests are designed to be independent and can run in any order

## Contributing

When adding new tests:

1. Follow the existing naming convention
2. Use descriptive test names
3. Ensure tests are platform-independent
4. Add proper cleanup for any temporary files
5. Use appropriate timeouts for build operations
