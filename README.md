# Ecommerce Frontend Project

A modern, responsive ecommerce frontend application built with React, featuring a smooth user experience and beautiful UI components.

## 🎯 Project Overview

This is a full-featured ecommerce frontend application designed to showcase products, manage shopping carts, and provide an intuitive user interface for online shopping. The project demonstrates modern frontend patterns and a clear separation of concerns.

## 🛠 Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Routing**: React Router DOM 7.17.0
- **Styling**: CSS | HTML
- **Animation**: Framer Motion 12.40.0
- **UI Components**: React Icons 5.6.0
- **Carousel/Slider**: Swiper 12.2.0
- **Notifications**: React Hot Toast 2.6.0
- **Linting**: ESLint 10.3.0

## ✨ Features

- 🛍️ Product catalog with responsive design
- 🛒 Shopping cart functionality
- ❤️ Wishlist functionality
- 🔍 Product filtering and search
- 📱 Mobile-friendly UI
- ✨ Smooth animations with Framer Motion
- 🔔 Toast notifications for user feedback
- 🎨 Icon library for enhanced UI
- 📊 Interactive carousel/slider components

## 🔐 Authentication (Login & Sign Up)

This project includes Login and Sign Up pages so users can authenticate and create accounts. The repository provides the frontend UI and client-side form handling; you can connect it to a backend API to enable real authentication.

What I added to the README:

- Short overview of the authentication pages and how to access them in development.
- Example environment variable and API endpoint patterns to integrate a backend.
- Example request payloads for login and registration.

How to use locally

1. Start the development server:

```bash
npm run dev
```

2. Open the app in your browser and navigate to:

- Login page: `http://localhost:5173/login`
- Sign Up page: `http://localhost:5173/signup`

(If your routes differ, check your router configuration in `src`.)

Integrating a backend (example)

- Add an environment variable for your API base URL. With Vite, add a `.env` file in the project root containing:

```
VITE_API_URL=https://your-api.example.com
```

- Typical endpoints the frontend expects (adjust to your backend):

  - POST `${VITE_API_URL}/api/auth/login` — to log in a user
  - POST `${VITE_API_URL}/api/auth/register` — to create a new user

Example request payloads

- Login (JSON):

```json
{
  "email": "user@example.com",
  "password": "supersecret"
}
```

- Sign Up (JSON):

```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "supersecret"
}
```

Notes

- If you don't have a backend yet, the forms can be used for UI testing; connect a mock or intercept requests in the frontend to simulate successful responses.
- To customize behavior, search for the login/signup components in `src/pages` or `src/components` (naming may vary) and update the API calls or form handlers there.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rahimkechemir/Ecommerce-frontend-project-.git
cd Ecommerce-frontend-project-
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (default Vite port)

### 4. Build for production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
Ecommerce-frontend-project-/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── styles/         # CSS files
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── eslintrc.js         # ESLint configuration
```

## 🎨 Key Dependencies

### React Ecosystem
- **React & React DOM**: Core framework
- **React Router DOM**: Client-side routing

### UI & Animation
- **Framer Motion**: Declarative animations and gestures
- **React Icons**: Icon library
- **Swiper**: Touch-enabled carousel/slider

### User Feedback
- **React Hot Toast**: Elegant toast notifications

### Development
- **Vite**: Next generation frontend tooling
- **ESLint**: Code quality and consistency

## 🔧 Configuration

### Vite Configuration
Vite is configured with React plugin for Fast Refresh. See `vite.config.js` for customization.

### ESLint Configuration
ESLint is set up to maintain code quality. Run `npm run lint` to check for issues.

## 🌐 Browser Support

This project supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance

The project utilizes Vite for:
- Lightning-fast development server
- Optimized production builds
- Native ES modules
- Hot Module Replacement (HMR)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Rahim Kechemir**
- GitHub: [@rahimkechemir](https://github.com/rahimkechemir)

## 💬 Support

If you have any questions or run into issues, please:
- Check existing issues on GitHub
- Create a new GitHub issue with detailed information
- Include error messages and steps to reproduce

## 🚀 Future Enhancements

Potential features for future development:
- Backend API integration
- User authentication system
- Payment gateway integration
- Order history and tracking
- User profile management
- Product reviews and ratings
- Multi-language support

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)
- [Framer Motion Documentation](https://www.framer.com/motion)

---

**Happy coding! 🎉**
