# Document Management System Frontend

A modern React.js-based frontend for a Document Management System featuring a feedback form, footer section, and an interactive chatbot.

## Features

- Responsive feedback form with validation
- Modern footer with contact information and social media links
- Interactive chatbot with basic conversation capabilities
- Responsive design using Tailwind CSS
- Smooth animations and transitions

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dms-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
  ├── components/
  │   ├── FeedbackForm.js
  │   ├── Footer.js
  │   └── ChatBot.js
  ├── App.js
  ├── App.css
  └── index.js
```

## Technologies Used

- React.js
- Tailwind CSS
- React Icons
- React Chatbot Kit

## Customization

### Colors
The main colors can be customized in the `tailwind.config.js` file:
- Primary color: #0056b3 (blue)
- Secondary color: #4CAF50 (green)

### Chatbot Responses
To modify the chatbot responses, edit the `getBotResponse` function in `src/components/ChatBot.js`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 