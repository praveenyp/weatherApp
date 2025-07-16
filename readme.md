# WeatherApp

A modern, responsive weather application that provides real-time weather updates, forecasts, and air quality information for any location worldwide.

![WeatherApp Screenshot](assets/screenshots/demo.png)

---

## 🚀 Features

- 🌦️ **Current Weather**: Get up-to-date weather conditions for your location.
- 📅 **7-Day Forecast**: View detailed forecasts for the week ahead.
- 🕒 **Hourly Forecast**: Check weather changes hour by hour.
- 🌫️ **Air Quality Index (AQI)**: Monitor air quality levels with color-coded badges.
- 🔍 **City Search**: Instantly search for weather in any city.
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop.
- 🎨 **Modern UI**: Sleek, dark-themed interface with smooth animations.

---

## 🖼️ Screenshots

> _Add your screenshots to the `assets/screenshots/` folder and update the image paths below._

| Home Screen | Forecast | AQI Highlights |
|-------------|----------|---------------|
| ![](assets/screenshots/home.png) | ![](assets/screenshots/forecast.png) | ![](assets/screenshots/aqi.png) |

---

## 🛠️ Tech Stack

- **HTML5 & CSS3** (Modern CSS, Flexbox, Grid)
- **JavaScript (ES6+)**
- **[OpenWeatherMap API](https://openweathermap.org/api)**
- **[Font: Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)**

---

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/weatherApp.git
   cd weatherApp
   ```
2. **Install dependencies:**
   (If using a build tool or package manager, otherwise skip this step)
   ```bash
   npm install
   ```
3. **Configure API Key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api) to get your API key.
   - Create a `.env` file or update the config in your JS files with your API key.

4. **Run the app:**
   - Open `index.html` in your browser, or
   - Use a local server (recommended for API calls):
     ```bash
     npx serve .
     # or
     python -m http.server
     ```

---

## 📦 Project Structure

```
weatherApp/
├── assets/
│   ├── css/
│   ├── font/
│   ├── icons/
│   └── screenshots/
├── js/
├── index.html
├── readme.md
└── ...
```

---

## 🙏 Credits

- UI inspired by modern weather apps and open-source projects.
- Weather data powered by [OpenWeatherMap](https://openweathermap.org/).
- Icons from [Material Symbols](https://fonts.google.com/icons).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
