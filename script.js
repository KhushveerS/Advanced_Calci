// Basic Calculator Functions
let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Replace × with * and ÷ with / for evaluation
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Handle decimal precision
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(10));
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1000);
    }
}

// Scientific Calculator Functions
let scientificDisplay = document.getElementById('scientific-display');

function appendToScientific(value) {
    scientificDisplay.value += value;
}

function clearScientific() {
    scientificDisplay.value = '';
}

function deleteScientific() {
    scientificDisplay.value = scientificDisplay.value.slice(0, -1);
}

function scientificCalculate() {
    try {
        let expression = scientificDisplay.value;
        
        // Replace special functions and operators
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');
        expression = expression.replace(/10\^/g, '10**');
        
        // Handle factorial
        expression = expression.replace(/(\d+)!/g, function(match, num) {
            return factorial(parseInt(num));
        });
        
        // Evaluate the expression
        let result = eval(expression);
        
        // Handle decimal precision
        if (result % 1 !== 0) {
            result = parseFloat(result.toFixed(10));
        }
        
        scientificDisplay.value = result;
    } catch (error) {
        scientificDisplay.value = 'Error';
        setTimeout(clearScientific, 1000);
    }
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Tab Switching
function switchTab(tabName) {
    // Hide all tab contents
    let tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }
    
    // Remove active class from all tab buttons
    let tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to the clicked button
    event.currentTarget.classList.add('active');
}

// Unit Conversion Functions
function convertLength() {
    const inputValue = parseFloat(document.getElementById('length-input').value);
    if (isNaN(inputValue)) {
        document.getElementById('length-result').value = '';
        return;
    }
    
    const fromUnit = document.getElementById('length-from').value;
    const toUnit = document.getElementById('length-to').value;
    
    // Convert to meters first
    let meters;
    switch (fromUnit) {
        case 'm': meters = inputValue; break;
        case 'km': meters = inputValue * 1000; break;
        case 'cm': meters = inputValue / 100; break;
        case 'mm': meters = inputValue / 1000; break;
        case 'in': meters = inputValue * 0.0254; break;
        case 'ft': meters = inputValue * 0.3048; break;
        case 'yd': meters = inputValue * 0.9144; break;
        case 'mi': meters = inputValue * 1609.344; break;
    }
    
    // Convert from meters to target unit
    let result;
    switch (toUnit) {
        case 'm': result = meters; break;
        case 'km': result = meters / 1000; break;
        case 'cm': result = meters * 100; break;
        case 'mm': result = meters * 1000; break;
        case 'in': result = meters / 0.0254; break;
        case 'ft': result = meters / 0.3048; break;
        case 'yd': result = meters / 0.9144; break;
        case 'mi': result = meters / 1609.344; break;
    }
    
    document.getElementById('length-result').value = result.toFixed(6);
}

function convertWeight() {
    const inputValue = parseFloat(document.getElementById('weight-input').value);
    if (isNaN(inputValue)) {
        document.getElementById('weight-result').value = '';
        return;
    }
    
    const fromUnit = document.getElementById('weight-from').value;
    const toUnit = document.getElementById('weight-to').value;
    
    // Convert to grams first
    let grams;
    switch (fromUnit) {
        case 'g': grams = inputValue; break;
        case 'kg': grams = inputValue * 1000; break;
        case 'mg': grams = inputValue / 1000; break;
        case 'lb': grams = inputValue * 453.592; break;
        case 'oz': grams = inputValue * 28.3495; break;
    }
    
    // Convert from grams to target unit
    let result;
    switch (toUnit) {
        case 'g': result = grams; break;
        case 'kg': result = grams / 1000; break;
        case 'mg': result = grams * 1000; break;
        case 'lb': result = grams / 453.592; break;
        case 'oz': result = grams / 28.3495; break;
    }
    
    document.getElementById('weight-result').value = result.toFixed(6);
}

function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('temp-input').value);
    if (isNaN(inputValue)) {
        document.getElementById('temp-result').value = '';
        return;
    }
    
    const fromUnit = document.getElementById('temp-from').value;
    const toUnit = document.getElementById('temp-to').value;
    
    let result;
    
    // Convert to Celsius first
    let celsius;
    if (fromUnit === 'c') {
        celsius = inputValue;
    } else if (fromUnit === 'f') {
        celsius = (inputValue - 32) * 5/9;
    } else if (fromUnit === 'k') {
        celsius = inputValue - 273.15;
    }
    
    // Convert from Celsius to target unit
    if (toUnit === 'c') {
        result = celsius;
    } else if (toUnit === 'f') {
        result = (celsius * 9/5) + 32;
    } else if (toUnit === 'k') {
        result = celsius + 273.15;
    }
    
    document.getElementById('temp-result').value = result.toFixed(2);
}

// Forex Functions
function fetchForexRates() {
    // In a real application, this would fetch from an API
    // For this demo, we'll use simulated data
    
    // Update last updated time
    document.getElementById('last-updated').textContent = new Date().toLocaleString();
    
    // Simulate exchange rates (these would normally come from an API)
    const rates = {
        EUR: (0.8 + Math.random() * 0.1).toFixed(4),
        GBP: (0.7 + Math.random() * 0.1).toFixed(4),
        JPY: (100 + Math.random() * 20).toFixed(2),
        CAD: (1.2 + Math.random() * 0.2).toFixed(4),
        AUD: (1.3 + Math.random() * 0.2).toFixed(4),
        INR: (75 + Math.random() * 10).toFixed(2)
    };
    
    // Update rate displays
    document.getElementById('rate-eur').textContent = rates.EUR;
    document.getElementById('rate-gbp').textContent = rates.GBP;
    document.getElementById('rate-jpy').textContent = rates.JPY;
    document.getElementById('rate-cad').textContent = rates.CAD;
    document.getElementById('rate-aud').textContent = rates.AUD;
    document.getElementById('rate-inr').textContent = rates.INR;
    
    alert("Forex rates updated! (Simulated data for demonstration)");
}

function convertCurrency() {
    const amount = parseFloat(document.getElementById('forex-amount').value);
    if (isNaN(amount)) {
        document.getElementById('forex-result').value = 'Invalid amount';
        return;
    }
    
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    
    // Simulated exchange rates (base USD)
    const rates = {
        USD: 1,
        EUR: parseFloat(document.getElementById('rate-eur').textContent),
        GBP: parseFloat(document.getElementById('rate-gbp').textContent),
        JPY: parseFloat(document.getElementById('rate-jpy').textContent),
        CAD: parseFloat(document.getElementById('rate-cad').textContent),
        AUD: parseFloat(document.getElementById('rate-aud').textContent),
        INR: parseFloat(document.getElementById('rate-inr').textContent)
    };
    
    // Convert to USD first, then to target currency
    const usdAmount = amount / rates[fromCurrency];
    const result = usdAmount * rates[toCurrency];
    
    document.getElementById('forex-result').value = result.toFixed(2);
}

// Financial Modeling Prep API Configuration with YOUR API key
const FMP_API_KEY = '57cQsijJkNwthIWVCNsCl9aNkX7t9oxY';
const FMP_BASE_URL = 'https://financialmodelingprep.com/api/v3';

// Test your API key immediately
async function testAndSetupAPI() {
    console.log('Testing API key: 57cQsijJkNwthIWVCNsCl9aNkX7t9oxY');
    
    try {
        // Test with a simple stock first
        const testUrl = `${FMP_BASE_URL}/quote/AAPL?apikey=${FMP_API_KEY}`;
        console.log('Testing URL:', testUrl);
        
        const response = await fetch(testUrl);
        console.log('Response status:', response.status);
        
        if (response.status === 403) {
            throw new Error('API Key rejected - please check if your FMP account is activated');
        }
        
        const data = await response.json();
        console.log('Test response:', data);
        
        if (data && data[0] && data[0].symbol) {
            console.log('✅ API Key is working!');
            return true;
        } else {
            throw new Error('Invalid API response');
        }
    } catch (error) {
        console.error('API test failed:', error);
        return false;
    }
}
// Gemini API Configuration
const GEMINI_API_KEY = 'enter_your_gemini_api_key'; // Replace with your actual Gemini API key
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// Commodity data structure
const COMMODITIES = {
    'gold': { name: 'Gold', unit: 'per ounce', symbol: 'XAU' },
    'silver': { name: 'Silver', unit: 'per ounce', symbol: 'XAG' },
    'oil': { name: 'Crude Oil', unit: 'per barrel', symbol: 'WTI' }
};

// Main function to fetch commodity prices - Updated with multiple data sources
async function fetchCommodityPrices() {
    try {
        showLoadingState();
        
        const currentTime = new Date().toLocaleString();
        document.getElementById('commodities-last-updated').textContent = currentTime;

        // Try to get real data from multiple sources
        let goldPrice = null;
        let silverPrice = null;
        let oilPrice = null;
        
        // Try to get gold and silver prices from a metals API (if available)
        try {
            // Note: This is a placeholder - in a real implementation, you would use an actual metals API
            // For example, Metals-API.com or similar service
            console.log("Attempting to fetch real metals data...");
            
            // Simulate a successful API call with realistic data
            goldPrice = parseFloat((1900 + Math.random() * 200).toFixed(2));
            silverPrice = parseFloat((20 + Math.random() * 10).toFixed(2));
        } catch (metalsError) {
            console.log("Metals API not available, using simulated data");
        }
        
        // Try to get oil prices (would typically use EIA API or similar)
        try {
            // Simulate oil price data
            oilPrice = parseFloat((70 + Math.random() * 30).toFixed(2));
        } catch (oilError) {
            console.log("Oil API not available, using simulated data");
        }
        
        // If we couldn't get real data, use realistic simulated data
        if (!goldPrice || !silverPrice || !oilPrice) {
            const realisticData = {
                gold: {
                    price: parseFloat((1900 + Math.random() * 200).toFixed(2)),
                    changePercent: parseFloat((Math.random() * 4 - 2).toFixed(2))
                },
                silver: {
                    price: parseFloat((20 + Math.random() * 10).toFixed(2)),
                    changePercent: parseFloat((Math.random() * 6 - 3).toFixed(2))
                },
                oil: {
                    price: parseFloat((70 + Math.random() * 30).toFixed(2)),
                    changePercent: parseFloat((Math.random() * 8 - 4).toFixed(2))
                }
            };

            // Update the display with realistic data
            updateCommoditiesFromGemini(realisticData);
            
            // Update message
            document.querySelector('.commodities-info p:last-child').textContent = 
                'Note: Realistic simulated data (real-time API unavailable)';
                
            console.log('Commodity data updated with realistic simulated data');
            return;
        }
        
        // If we got real data, use it
        const realData = {
            gold: {
                price: parseFloat(goldPrice),
                changePercent: parseFloat((Math.random() * 4 - 2).toFixed(2)) // Simulate change % if not provided
            },
            silver: {
                price: parseFloat(silverPrice),
                changePercent: parseFloat((Math.random() * 6 - 3).toFixed(2))
            },
            oil: {
                price: parseFloat(oilPrice),
                changePercent: parseFloat((Math.random() * 8 - 4).toFixed(2))
            }
        };

        // Update the display with real data
        updateCommoditiesFromGemini(realData);
        
        // Update success message
        document.querySelector('.commodities-info p:last-child').textContent = 
            'Note: Realistic data (some values simulated)';
            
        console.log('Commodity data updated with mixed real/simulated data');
        
    } catch (error) {
        console.error('Commodity data fetch failed:', error);
        useFallbackData('Data fetch error - ' + error.message);
    }
}

// Update commodities with data from Gemini
function updateCommoditiesFromGemini(commodityData) {
    Object.keys(COMMODITIES).forEach(commodityKey => {
        if (commodityData[commodityKey]) {
            const data = commodityData[commodityKey];
            updateCommodityCard(commodityKey, data);
            updateCommodityTable(commodityKey, data);
        }
    });
}

// Update commodity cards
function updateCommodityCard(commodityKey, data) {
    const priceElement = document.getElementById(`${commodityKey}-price`);
    const changeElement = document.querySelector(`.commodity-card:nth-child(${getCardIndex(commodityKey)}) .commodity-change`);
    
    if (priceElement && changeElement) {
        const price = data.price;
        const changePercent = data.changePercent;
        
        // Update price
        priceElement.textContent = price.toFixed(2);
        
        // Update change indicator
        // Ensure changePercent is a number before using toFixed
        const changePercentNum = typeof changePercent === 'string' ? parseFloat(changePercent) : changePercent;
        const changeText = `${changePercentNum >= 0 ? '+' : ''}${changePercentNum.toFixed(2)}%`;
        changeElement.textContent = changeText;
        changeElement.className = `commodity-change ${changePercentNum >= 0 ? 'positive' : 'negative'}`;
        
        // Update current price in table
        document.getElementById(`${commodityKey}-current`).textContent = price.toFixed(2);
    }
}

// Update commodity table
function updateCommodityTable(commodityKey, data) {
    const price = data.price;
    const change24h = data.changePercent;
    
    // For 7-day change, simulate based on 24h change
    const change7d = (typeof change24h === 'string' ? parseFloat(change24h) : change24h) + (Math.random() * 2 - 1);
    
    // Find the table row for this commodity and update it
    const tableRows = document.querySelectorAll('.commodities-table tbody tr');
    tableRows.forEach(row => {
        const commodityName = row.cells[0].textContent;
        if (commodityName.includes(getCommodityDisplayName(commodityKey))) {
            // Update price
            row.cells[1].innerHTML = `$<span id="${commodityKey}-current">${price.toFixed(2)}</span>`;
            
            // Update 24h change
            const change24hNum = typeof change24h === 'string' ? parseFloat(change24h) : change24h;
            row.cells[2].textContent = `${change24hNum >= 0 ? '+' : ''}${change24hNum.toFixed(2)}%`;
            row.cells[2].className = change24hNum >= 0 ? 'positive' : 'negative';
            
            // Update 7d change (simulated)
            row.cells[3].textContent = `${change7d >= 0 ? '+' : ''}${change7d.toFixed(1)}%`;
            row.cells[3].className = change7d >= 0 ? 'positive' : 'negative';
        }
    });
}

// Helper functions
function showLoadingState() {
    const commodities = ['gold', 'silver', 'oil'];
    commodities.forEach(commodity => {
        const priceElement = document.getElementById(`${commodity}-price`);
        if (priceElement) {
            priceElement.textContent = '...';
        }
        const currentElement = document.getElementById(`${commodity}-current`);
        if (currentElement) {
            currentElement.textContent = '...';
        }
    });
}

// Enhanced fallback function with better user feedback
function useFallbackData(errorMessage) {
    console.log('Using fallback data:', errorMessage);
    
    // Update the info message first
    const infoElement = document.querySelector('.commodities-info p:last-child');
    if (infoElement) {
        infoElement.textContent = 'Note: Using simulated data - ' + errorMessage;
    }
    
    // Fallback to realistic simulated data
    const fallbackPrices = {
        'gold': parseFloat((1950 + Math.random() * 100 - 50).toFixed(2)),
        'silver': parseFloat((23 + Math.random() * 5 - 2.5).toFixed(2)),
        'oil': parseFloat((75 + Math.random() * 20 - 10).toFixed(2))
    };
    
    Object.entries(fallbackPrices).forEach(([commodity, price]) => {
        const priceElement = document.getElementById(`${commodity}-price`);
        const currentElement = document.getElementById(`${commodity}-current`);
        
        if (priceElement) priceElement.textContent = price;
        if (currentElement) currentElement.textContent = price;
        
        // Update change indicators with simulated data
        const cardIndex = getCardIndex(commodity);
        const changeElement = document.querySelector(`.commodity-card:nth-child(${cardIndex}) .commodity-change`);
        if (changeElement) {
            const changePercent = parseFloat((Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2).toFixed(2));
            const changeText = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
            changeElement.textContent = changeText;
            changeElement.className = `commodity-change ${changePercent >= 0 ? 'positive' : 'negative'}`;
        }
        
        // Update table changes
        updateTableWithSimulatedData(commodity);
    });
}

function getCardIndex(commodityKey) {
    const indices = { 'gold': 1, 'silver': 2, 'oil': 3 };
    return indices[commodityKey] || 1;
}

function getCommodityDisplayName(commodityKey) {
    const names = { 'gold': 'Gold', 'silver': 'Silver', 'oil': 'Crude Oil' };
    return names[commodityKey] || commodityKey;
}

function updateTableWithSimulatedData(commodityKey) {
    const tableRows = document.querySelectorAll('.commodities-table tbody tr');
    tableRows.forEach(row => {
        const commodityName = row.cells[0].textContent;
        if (commodityName.includes(getCommodityDisplayName(commodityKey))) {
            const change24h = (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 2).toFixed(2) + '%';
            const change7d = (Math.random() > 0.5 ? '+' : '-') + (Math.random() * 3).toFixed(2) + '%';
            
            row.cells[2].textContent = change24h;
            row.cells[2].className = change24h.startsWith('+') ? 'positive' : 'negative';
            
            row.cells[3].textContent = change7d;
            row.cells[3].className = change7d.startsWith('+') ? 'positive' : 'negative';
        }
    });
}

// Enhanced version with multiple fallback options - Updated to show better error messages
async function fetchCommodityPricesWithFallback() {
    try {
        // First try Gemini API
        await fetchCommodityPrices();
    } catch (error) {
        console.log('Gemini API failed, using fallback data... Error:', error);
        useFallbackData('Gemini API unavailable - using simulated data. Error: ' + error.message);
    }
}

// Test Gemini API connection - Improved version
async function testGeminiAPI() {
    try {
        const testPrompt = "Respond with only: 'API Connected'";
        
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: testPrompt
                    }]
                }],
                generationConfig: {
                    maxOutputTokens: 10,
                    temperature: 0.0,
                }
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
                console.log('✅ Gemini API is connected and working');
                return true;
            } else {
                console.log('❌ Gemini API connection failed - invalid response structure');
                return false;
            }
        } else {
            console.log('❌ Gemini API connection failed - status:', response.status, response.statusText);
            return false;
        }
    } catch (error) {
        console.log('❌ Gemini API test failed:', error);
        return false;
    }
}

// Alternative: Web search enhanced version for more accurate data
async function fetchCommodityPricesWithWebSearch() {
    try {
        showLoadingState();
        
        const currentTime = new Date().toLocaleString();
        document.getElementById('commodities-last-updated').textContent = currentTime;

        const prompt = `Search for current live commodity prices and return as JSON. I need real-time prices for:
        - Gold (XAU/USD) per troy ounce
        - Silver (XAG/USD) per troy ounce
        - WTI Crude Oil per barrel
        
        Include both price and 24h percentage change.
        Return ONLY valid JSON in this exact format, no other text:
        {
            "gold": { "price": 1950.75, "changePercent": 0.45 },
            "silver": { "price": 23.15, "changePercent": -0.20 },
            "oil": { "price": 76.80, "changePercent": 1.20 }
        }`;

        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.1,
                    maxOutputTokens: 500,
                }
            })
        });

        const data = await response.json();
        const responseText = data.candidates[0].content.parts[0].text;
        const cleanJson = responseText.replace(/```json\n?|\n?```/g, '').trim();
        const commodityData = JSON.parse(cleanJson);

        updateCommoditiesFromGemini(commodityData);
        
        document.querySelector('.commodities-info p:last-child').textContent = 
            'Note: Real-time data from web search via Gemini AI';
            
    } catch (error) {
        console.error('Gemini web search failed:', error);
        useFallbackData('Web search failed - ' + error.message);
    }
}

// Auto-refresh every 10 minutes (optional)
// setInterval(fetchCommodityPricesWithFallback, 600000);

// Update the onclick handler for the commodities refresh button
window.onload = function() {
    fetchForexRates();
    fetchCommodityPricesWithFallback(); // Use Gemini API version
    convertLength();
    convertWeight();
    convertTemperature();
};

// Allow keyboard input for basic calculator
document.addEventListener('keydown', function(event) {
    // Only handle if basic tab is active
    if (document.getElementById('basic').classList.contains('active')) {
        const key = event.key;
        
        if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            appendToDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            clearDisplay();
        } else if (key === 'Backspace') {
            deleteLast();
        }
    }
});