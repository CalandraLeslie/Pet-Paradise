# Pet Paradise - GitHub Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
Pet Paradise is a comprehensive e-commerce platform for pet food, toys, and accessories. The application is built with Next.js 14, TypeScript, and Tailwind CSS, featuring a modern design system with accessibility-first principles.

## Design System & Colors
The project uses a carefully crafted color palette optimized for pet store psychology:

### Primary Colors
- **Primary Blue** (#4A90E2): Calming, trustworthy - used for primary actions
- **Primary Green** (#7CB342): Nature, health - used for success states
- **Primary Orange** (#FF8C00): Energy, playfulness - used for highlights

### Pet Category Colors
- **Dog** (#8B4513): Warm brown
- **Cat** (#708090): Cool gray  
- **Bird** (#FFD700): Bright yellow
- **Fish** (#00CED1): Aqua blue
- **Rabbit** (#DDA0DD): Soft purple
- **Reptile** (#9ACD32): Yellow green

### Accessibility Requirements
- Maintain 4.5:1 contrast ratio for normal text
- Maintain 3:1 contrast ratio for large text
- Never rely solely on color to convey information
- Include icons and text labels alongside color coding

## Code Style Guidelines

### Component Structure
- Use functional components with TypeScript
- Implement proper prop typing with interfaces
- Use 'use client' directive for interactive components
- Follow the established naming conventions

### Styling Approach
- Use Tailwind CSS utility classes
- Leverage custom design tokens defined in tailwind.config.js
- Use the predefined component classes (.btn-primary, .card, etc.)
- Implement responsive design with mobile-first approach

### Image Handling
- Use Next.js Image component for optimization
- Source images from Unsplash, Pexels, or similar free platforms
- Always include proper alt text for accessibility
- Use appropriate aspect ratios for different content types

### State Management
- Use React hooks for local state
- Implement proper loading and error states
- Follow React best practices for performance

## Feature Requirements
When adding new features, ensure they include:
- Proper TypeScript typing
- Accessibility features (ARIA labels, keyboard navigation)
- Responsive design for all screen sizes
- Loading states and error handling
- Proper SEO meta tags where applicable

## Pet Product Categories
The store should support these main categories:
- Dogs: Food, toys, training supplies, health products
- Cats: Food, litter, toys, scratching posts
- Birds: Seeds, cages, perches, toys
- Fish: Food, tanks, filters, decorations
- Small Pets: Habitats, bedding, food, toys
- Reptiles: Heating, lighting, terrariums, food

## Performance Considerations
- Optimize images with Next.js Image component
- Use dynamic imports for large components
- Implement proper caching strategies
- Follow Next.js best practices for SEO and performance
