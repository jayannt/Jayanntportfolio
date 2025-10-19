# Personal Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and professional experience.

## Features

- **Responsive Design**: Mobile-first approach with seamless adaptation to all screen sizes
- **Dynamic Project Loading**: Projects are loaded from JSON data for easy updates
- **Smooth Animations**: Elegant transitions and hover effects throughout
- **Modular Architecture**: Reusable components and organized file structure
- **Contact Form**: Static form with client-side validation

## Structure

```
├── index.html              # Main page
├── favicon.ico             # Site favicon
├── assets/                 # Static assets
│   ├── fonts/             # Custom web fonts
│   ├── icons/             # Icon files
│   ├── images/            # Images and photos
│   ├── resume/            # Resume/CV files
│   └── videos/            # Video content
├── components/            # Reusable HTML components
├── css/                   # Stylesheets
│   ├── style.css         # Main styles
│   ├── animations.css    # Animations and transitions
│   └── responsive.css    # Responsive breakpoints
├── js/                    # JavaScript modules
│   ├── main.js           # Main initialization
│   ├── form.js           # Contact form handling
│   └── projects.js       # Project rendering
├── data/                  # Data files
│   └── projects.json     # Project information
└── mail/                  # Contact form backend (static)
```

## Usage

Open `index.html` in a web browser or serve with a local web server:

```bash
python -m http.server 5000
```

Then visit `http://localhost:5000`

## Customization

1. Update your information in `index.html`
2. Add your projects to `data/projects.json`
3. Replace placeholder images in `assets/images/`
4. Customize colors and fonts in `css/style.css`

## License

© 2025. All rights reserved.
