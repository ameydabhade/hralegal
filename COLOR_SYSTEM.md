# HRA Legal Website - Color System Documentation

## Overview
This document outlines the centralized color system implemented for the HRA Legal website. The system uses CSS custom properties (variables) to define primary and secondary colors that can be easily changed site-wide.

## Color Hierarchy

### 1. Primary Colors (Royal Purple)
The main brand colors based on your elegant purple palette:
- **Primary-500**: `#624E88` - Main royal purple
- **Primary-400**: `#8967B3` - Medium purple (user provided)
- **Primary-300**: `#CB80AB` - Light purple/mauve (user provided)
- **Primary-50 to Primary-900**: Complete scale from lightest to darkest

### 2. Secondary Colors (Warm Cream/Gold)
Beautiful warm complement that creates stunning contrast:
- **Secondary-500**: `#E6D9A2` - Main cream/gold color (user provided)
- **Secondary-50 to Secondary-900**: Complete scale from lightest to darkest

### 3. Accent Colors
Additional palette options for special use cases:
- **Accent-Purple**: Purple gradient tones (includes your `#CB80AB`)
- **Accent-Gradient**: Medium purple variations (includes your `#8967B3`)
- **Accent-Lavender**: Soft purple complements
- **Accent-Gray**: Neutral gray tones

## How to Use

### CSS Custom Properties
You can use the CSS variables directly in your custom CSS:
```css
.my-element {
  background-color: var(--primary-500);
  border-color: var(--secondary-300);
  color: var(--primary-700);
}
```

### Utility Classes

#### Primary Colors
```html
<!-- Background -->
<div class="bg-primary">Main primary background</div>
<div class="bg-primary-light">Light primary background</div>
<div class="bg-primary-dark">Dark primary background</div>

<!-- Text -->
<p class="text-primary">Primary text color</p>
<p class="text-primary-light">Light primary text</p>
<p class="text-primary-dark">Dark primary text</p>

<!-- Borders -->
<div class="border border-primary">Primary border</div>

<!-- Numbered scale (50-900) -->
<div class="bg-primary-100">Lightest</div>
<div class="bg-primary-500">Main primary</div>
<div class="bg-primary-900">Darkest</div>
```

#### Secondary Colors
```html
<!-- Background -->
<div class="bg-secondary">Main secondary background</div>
<div class="bg-secondary-light">Light secondary background</div>
<div class="bg-secondary-dark">Dark secondary background</div>

<!-- Text -->
<p class="text-secondary">Secondary text color</p>
<p class="text-secondary-light">Light secondary text</p>
<p class="text-secondary-dark">Dark secondary text</p>

<!-- Numbered scale (50-900) -->
<div class="bg-secondary-100">Lightest</div>
<div class="bg-secondary-500">Main secondary</div>
<div class="bg-secondary-900">Darkest</div>
```

#### Hover States
```html
<button class="bg-primary hover:bg-primary-dark">Primary Button</button>
<button class="bg-secondary hover:bg-secondary-dark">Secondary Button</button>
<a class="text-primary hover:text-primary-dark">Primary Link</a>
```

## Changing Colors Site-wide

### Method 1: Update CSS Variables (Recommended)
To change colors across the entire site, simply update the CSS custom properties in `src/app/globals.css`:

```css
:root {
  /* To change primary colors, update these values */
  --primary-500: #your-new-primary-color;
  --primary-600: #your-new-primary-dark;
  /* etc... */
  
  /* To change secondary colors, update these values */
  --secondary-500: #your-new-secondary-color;
  --secondary-600: #your-new-secondary-dark;
  /* etc... */
}
```

### Method 2: Use Different Accent Palettes
You can switch to using accent palettes by updating the primary/secondary mappings:

```css
:root {
  /* Map primary to lavender instead of beige */
  --primary-500: var(--accent-lavender-500);
  --primary-600: var(--accent-lavender-600);
  /* etc... */
}
```

## Color Scale Reference

Each color has a scale from 50 (lightest) to 900 (darkest):
- **50**: Very light tint
- **100**: Light tint  
- **200**: Light
- **300**: Medium-light
- **400**: Medium
- **500**: **Main color** (default)
- **600**: Medium-dark
- **700**: Dark
- **800**: Very dark
- **900**: Darkest

## Backward Compatibility

All existing `beige-*` classes will continue to work as they now map to the primary color system:
- `bg-beige-400` → `bg-primary-400`
- `text-beige-500` → `text-primary-500`
- etc.

## Best Practices

1. **Use semantic naming**: Prefer `bg-primary` over `bg-beige-400` for new code
2. **Consistent hierarchy**: Use primary for main brand elements, secondary for accents
3. **Test color changes**: When updating colors, test across different components
4. **Maintain contrast**: Ensure sufficient contrast for accessibility
5. **Document changes**: Update this file when adding new color utilities

## Examples in Practice

### Button Styling
```html
<!-- Primary button -->
<button class="bg-primary text-white hover:bg-primary-dark">
  Primary Action
</button>

<!-- Secondary button -->
<button class="border border-primary text-primary hover:bg-primary hover:text-white">
  Secondary Action
</button>

<!-- Accent button -->
<button class="bg-secondary text-white hover:bg-secondary-dark">
  Accent Action
</button>
```

### Card Components
```html
<div class="bg-white border border-primary-200 rounded-lg">
  <div class="bg-primary-50 p-4 border-b border-primary-200">
    <h3 class="text-primary-700">Card Header</h3>
  </div>
  <div class="p-4">
    <p class="text-gray-700">Card content...</p>
    <a href="#" class="text-primary hover:text-primary-dark">Learn more</a>
  </div>
</div>
```

### Navigation
```html
<nav class="bg-primary-100 border-b border-primary-200">
  <a href="#" class="text-primary-700 hover:text-primary">Home</a>
  <a href="#" class="text-primary-600 hover:text-primary">About</a>
</nav>
```

## Quick Color Change Guide

To completely rebrand the site colors:

1. **Choose your new primary color** (main brand color)
2. **Generate a color scale** (50-900) for your primary color
3. **Choose a complementary secondary color**
4. **Generate a color scale** for your secondary color
5. **Update the CSS variables** in `globals.css`
6. **Test the site** to ensure everything looks good

The entire site will automatically update to use your new colors! 