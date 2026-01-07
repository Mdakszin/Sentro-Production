# Sentro - Ignite Your Potential

Sentro (formerly Gauteng City College) is a modern, interactive web application featuring a stunning 3D background and smooth scrolling animations. It is designed to provide a premium user experience for prospective students, showcasing the college's faculties, student life, and vision.

![Sentro Hero](https://via.placeholder.com/800x450?text=Sentro+Hero+Preview) <!-- Replace with actual screenshot if available -->

## 🚀 Features

- **3D Interactive Background**: Implemented using `three.js` and `@react-three/fiber`, featuring floating geometric shapes and particles that respond to scroll.
- **Smooth Scrolling**: Powered by `lenis` for a luxurious, weighted scroll feel across the entire application.
- **Hero Scroll Animation**: A "Fly-Through" effect where the word "Potential" expands as you scroll, immersing the user into the content.
- **Glassmorphism UI**: Modern, translucent UI components that blend seamlessly with the 3D background.
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices.

## 🛠 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) / [Drei](https://github.com/pmndrs/drei)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/sentro.git
    cd sentro
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── UI/            # 2D UI Components (Hero, Navbar, About, etc.)
│   └── Scene.jsx      # Main 3D Scene entry point
├── App.jsx            # Main App layout & Lenis configuration
├── main.jsx           # Entry point
└── index.css          # Tailwind & Global styles
```

## 🎨 Design System

- **Primary Color**: Navy Blue (Backgrounds)
- **Secondary Color**: Gold (Highlights, Buttons, Accents)
- **Accent Color**: Sky Blue (gradients, secondary highlights)
- **Typography**: Modern headings (Font Heading) and clean body text.

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License.
