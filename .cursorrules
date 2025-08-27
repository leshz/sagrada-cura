# Sagrada Cura - Cursor Rules

## Project Overview
Sagrada Cura is a Next.js 14 e-commerce application focused on natural healing products. The project uses TypeScript, Bootstrap 5, Zustand for state management, and follows modern React patterns.

## Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + SASS
- **State Management**: Zustand
- **Forms**: Formik + Yup
- **UI Libraries**: React Toastify, Swiper, Bootstrap Icons
- **CMS**: Strapi
- **Deployment**: Vercel
- **Linting**: ESLint (Airbnb config) + Prettier

## File Structure & Organization

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
│   ├── accessibility/     # Accessibility components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── form/             # Form components
│   └── [feature]/        # Feature-specific components
├── hooks/                # Custom React hooks
├── services/             # API services and external integrations
├── store/                # Zustand state management
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
├── styles/               # Global styles and SASS files
├── config/               # Configuration files
├── providers/            # React context providers
└── schema/               # Validation schemas (Yup)
```

### Naming Conventions
- **Components**: PascalCase (e.g., `ProductCard.tsx`)
- **Files**: kebab-case for pages, PascalCase for components
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Types/Interfaces**: PascalCase with descriptive names

## Code Style & Standards

### TypeScript
- Use strict TypeScript configuration
- Prefer interfaces over types for object shapes
- Use explicit typing for function parameters and return types
- Avoid `any` type - use proper typing or `unknown`
- Use utility types when appropriate (Partial, Pick, Omit, etc.)

### React Components
- Use functional components with arrow function syntax
- Implement proper TypeScript interfaces for props
- Use React.FC for component typing when appropriate
- Prefer named exports over default exports
- Use proper prop destructuring

### State Management
- Use Zustand for global state management
- Keep components as stateless as possible
- Use React hooks for local component state
- Implement proper TypeScript interfaces for store slices

### Styling
- Use Bootstrap 5 classes as primary styling method
- Custom styles should be in SASS files
- Follow Bootstrap's responsive design patterns
- Use CSS custom properties for theme values
- Maintain consistent spacing and typography

## Component Guidelines

### Component Structure
```typescript
interface ComponentProps {
  // Define props interface
}

export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  )
}
```

### Form Components
- Use Formik for form management
- Implement Yup validation schemas
- Provide proper error handling and user feedback
- Use React Toastify for success/error notifications

### Layout Components
- Implement proper semantic HTML structure
- Include accessibility features (ARIA labels, skip links)
- Use Bootstrap's grid system for responsive layouts
- Implement proper meta tags for SEO

## API & Services

### Service Structure
- Create service files in `src/services/`
- Use proper TypeScript interfaces for API responses
- Implement error handling for API calls
- Use environment variables for API endpoints

### Data Fetching
- Use Next.js App Router data fetching methods
- Implement proper loading and error states
- Use Suspense boundaries for async components
- Cache data appropriately

## Accessibility

### Requirements
- Implement proper ARIA labels and roles
- Ensure keyboard navigation support
- Provide alt text for images
- Use semantic HTML elements
- Test with screen readers

### Components
- Include skip links for navigation
- Implement proper focus management
- Use proper heading hierarchy
- Ensure color contrast meets WCAG guidelines

## Performance

### Optimization
- Use Next.js Image component for optimized images
- Implement proper code splitting
- Use React.memo for expensive components
- Optimize bundle size with tree shaking
- Use Vercel Speed Insights for monitoring

### SEO
- Implement proper meta tags
- Use structured data where appropriate
- Optimize for Core Web Vitals
- Implement proper sitemap generation

## Testing & Quality

### Code Quality
- Follow ESLint rules (Airbnb + Next.js config)
- Use Prettier for code formatting
- Implement proper error boundaries
- Use TypeScript strict mode

### Git Workflow
- Use conventional commit messages
- Implement Husky pre-commit hooks
- Follow feature branch workflow
- Write descriptive commit messages

## Development Guidelines

### Environment Setup
- Use Node.js 20.x
- Install dependencies with yarn
- Use development server: `yarn dev`
- Build for production: `yarn build`

### Debugging
- Use React DevTools for component debugging
- Implement proper error boundaries
- Use console logging sparingly
- Monitor performance with Vercel Analytics

### Deployment
- Deploy to Vercel platform
- Use environment variables for configuration
- Implement proper CI/CD pipeline
- Monitor application performance

## Common Patterns

### Error Handling
```typescript
try {
  // API call or async operation
} catch (error) {
  console.error('Error description:', error)
  // Handle error appropriately
}
```

### Loading States
```typescript
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
```

### Form Validation
```typescript
const validationSchema = yup.object({
  field: yup.string().required('Field is required')
})
```

## Best Practices

1. **Component Composition**: Prefer composition over inheritance
2. **Performance**: Use React.memo and useMemo when appropriate
3. **Security**: Sanitize user inputs and implement proper validation
4. **SEO**: Use proper meta tags and structured data
5. **Accessibility**: Test with screen readers and keyboard navigation
6. **Responsive Design**: Test on multiple screen sizes
7. **Error Boundaries**: Implement proper error handling
8. **Type Safety**: Use TypeScript strictly and avoid any types

## Dependencies to Remember
- Next.js 14 with App Router
- Bootstrap 5 for styling
- Zustand for state management
- Formik + Yup for forms
- React Toastify for notifications
- Swiper for carousels
- Strapi for CMS integration