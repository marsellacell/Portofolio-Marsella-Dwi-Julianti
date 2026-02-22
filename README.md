# Marsella Dwi Julianti - Portfolio Website

A modern, minimalist portfolio website showcasing professional experience, education, and featured projects. Built with React, Vite, and Tailwind CSS with a focus on clean design and user experience.

## Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop devices
- **Modern UI** — Clean, minimal aesthetic with smooth animations and transitions
- **Project Showcase** — Featured projects with descriptions, tech badges, and preview images
- **Experience Timeline** — Professional experiences with icons, skills, and certificate links
- **Education Timeline** — Academic history with detailed descriptions
- **Scroll-Spy Navigation** — Active section highlighting as you scroll
- **Fast Performance** — Built with Vite for quick page loads and instant updates

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Typography:** Plus Jakarta Sans (Google Fonts)
- **Package Manager:** npm

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/marsellacell/Portofolio-Marsella-Dwi-Julianti.git
   cd Portofolio-Marsella-Dwi-Julianti
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
├── public/
│   └── assets/              # Images and project previews
│       ├── BanyuGrowth.jpg
│       ├── c++.png
│       ├── netbeans.png
│       ├── springbootrestapi.jpg
│       └── DSC01900.JPG
├── src/
│   ├── home.jsx            # Main portfolio component
│   ├── main.jsx            # React entry point
│   └── index.css           # Base styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies
```

## Sections

### About
Brief introduction with profile photo, professional summary, and key skills.

### Experience
Timeline of professional roles including:
- Google Student Ambassador (2025–2026)
- Content Creator Specialist (2024–2025)
- Media & Creative Department Staff (2024–2025)

Each experience includes skills, descriptions, and certificate links.

### Education
Academic background with details about:
- Universitas Telkom Purwokerto (Software Engineering, 2023–2027)
- SMKS Al-Furqon Bantarkawung (Network Systems, 2020–2023)

### Featured Work
Showcase of 6 projects including:
- BanyuGrowth (Flutter mobile app)
- Web Explorations (Frontend development)
- Java OOP Essentials
- Data Structure Implementations (C++)
- Spring Boot REST API
- And more...

Each project includes description, technology stack, preview image, and GitHub link.

### Contact
Direct contact options via email, LinkedIn, and GitHub.

## Customization

### Modify Profile Information
Edit the `profile` object in `src/home.jsx`:
```javascript
const profile = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  linkedin: "your-linkedin-url",
  github: "your-github-url",
  resume: "your-resume-url",
  summary: "Your summary..."
};
```

### Update Experience
Modify the `experiences` array to add or update professional experiences.

### Add Projects
Add new entries to the `featuredWorks` array with project details and images.

### Color Scheme
The portfolio uses a custom color palette defined in Tailwind classes:
- Primary: `#B4A697` (Taupe)
- Dark: `#2D2D2D` (Dark Gray)
- Light: `#F9F8F6` (Cream)

## Scripts

- `npm run dev` — Start development server with hot reload
- `npm run build` — Create production build
- `npm run preview` — Preview production build locally

## Philosophy

> "Simplicity is the ultimate sophistication."

This portfolio embodies the principle that great design isn't just about appearance, but about creating intuitive and meaningful user experiences. Every element is carefully considered to ensure clarity, functionality, and aesthetic appeal.

## Contact

- **Email:** [marselladwijulianti@gmail.com](mailto:marselladwijulianti@gmail.com)
- **LinkedIn:** [Marsella Dwi Julianti](https://linkedin.com/in/marsella-dwi-julianti-477b60257)
- **GitHub:** [@marsellacell](https://github.com/marsellacell)

## License

This project is personal portfolio. Feel free to use it as inspiration for your own portfolio!

---

**© 2026 Marsella Dwi Julianti** — All rights reserved.
