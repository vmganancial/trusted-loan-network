# Trusted Loan Network

A modern React.js-based website for Trusted Loan Network - a professional loan agency platform featuring loan applications, agent listings, and client feedback.

## Features

- **Responsive Design**: Modern UI/UX with Tailwind CSS
- **Loan Applications**: Interactive forms for Personal, Business, and Doctors loans
- **Agent Directory**: Searchable list of loan specialists with contact information
- **Client Feedback**: Feedback form with client testimonials carousel
- **User Authentication**: Login and signup pages
- **Interactive Elements**: Hover animations, carousels, and smooth transitions
- **Professional Layout**: Header with navigation, hero section, and footer

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/vmganancial/trusted-loan-network.git
cd trusted-loan-network
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
  │   ├── Header.js
  │   ├── Hero.js
  │   ├── LoanOptions.js
  │   ├── AboutUs.js
  │   ├── Team.js
  │   ├── FeedbackSection.js
  │   ├── Footer.js
  │   ├── LoanEligibilityForm.js
  │   ├── LoginPage.js
  │   ├── SignupPage.js
  │   ├── AgentList.js
  │   ├── ProfileIcon.js
  │   └── ChatBot.js
  ├── App.js
  ├── App.css
  └── index.js
```

## Technologies Used

- **React.js** - Frontend framework
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and responsive design
- **React Icons** - Icon library
- **React Slick** - Carousel components

## Loan Types

- **Personal Loan**: A non-collateral and no co-maker cash loan for salaried individuals
- **Business Loan**: Without collateral installment loan for business owners  
- **Doctors Loan**: A multi-purpose loan for medical practitioners

## Customization

### Colors
The main colors can be customized in the `tailwind.config.js` file:
- Primary color: #0056b3 (blue)
- Secondary color: #4CAF50 (green)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
