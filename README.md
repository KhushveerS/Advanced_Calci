# Advanced Calculator

A comprehensive calculator application with multiple functionalities including basic calculations, scientific functions, unit conversions, forex rates, and commodity prices.

## Features

### 1. Basic Calculator
- Standard arithmetic operations (addition, subtraction, multiplication, division)
- Clear and delete functions
- Keyboard support

### 2. Scientific Calculator
- Trigonometric functions (sin, cos, tan)
- Logarithmic functions (log, ln)
- Square root and exponentiation
- Constants (π, e)
- Factorial calculations

### 3. Unit Conversion
- Length conversion (meters, kilometers, centimeters, etc.)
- Weight conversion (kilograms, grams, pounds, etc.)
- Temperature conversion (Celsius, Fahrenheit, Kelvin)

### 4. Forex Calculator
- Currency conversion between major world currencies
- Simulated exchange rates for demonstration
- Refresh functionality to update rates

### 5. Commodities Tracker
- Real-time tracking of gold, silver, and crude oil prices
- Price change indicators (24h and 7d)
- Simulated data with realistic values

## Project Structure

```
.
├── index.html          # Main HTML structure
├── style.css           # Styling for the calculator
├── script.js           # All JavaScript functionality
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser
2. Switch between different calculator modes using the tab buttons at the top
3. Each tab provides different functionality:
   - **Basic**: Standard calculator operations
   - **Scientific**: Advanced mathematical functions
   - **Conversion**: Unit conversions
   - **Forex**: Currency exchange calculations
   - **Commodities**: Precious metals and oil price tracking

## Technical Details

### APIs Used

- **Financial Modeling Prep API**: For financial data (API key configured)
- **Gemini API**: For commodity price data (API key configured)
- **Alpha Vantage API**: Alternative commodity data source (API key configured)

### JavaScript Features

- Modular functions for each calculator type
- Event handling for user interactions
- DOM manipulation for dynamic content updates
- Error handling for calculations and API calls
- Simulated data fallbacks for offline use

## Development

To modify or extend this calculator:

1. Edit `index.html` to change the structure
2. Modify `style.css` to change the appearance
3. Update `script.js` to add new functionality

All functions are well-commented for easy understanding and modification.

## Known Issues

- Commodity prices use simulated data in this demo version
- Forex rates are simulated for demonstration purposes

## Future Enhancements

- Integration with real-time financial APIs
- Additional unit conversion categories
- Historical data tracking for commodities
- User preferences and settings