# Netflix Clone

A React-based Netflix clone featuring real movie data from TMDB API, with movie details and trailer previews.

## Features
- Dynamic movie rows by category
- Featured movie banner
- Movie details modal
- Trailer preview placeholder
- Responsive design
- Netflix-like animations and transitions

## Setup Instructions

1. Get TMDB API Key:
   - Visit [TMDB Website](https://www.themoviedb.org/)
   - Create an account and request an API key
   - Copy your API key

2. Configure Environment Variables:
   - Create a `.env` file in the root directory
   - Add your TMDB API key:
     ```
     REACT_APP_TMDB_API_KEY=your_api_key_here
     ```
   Note: Never commit the `.env` file to version control

3. Install Dependencies:
```bash
npm install
```

4. Start the Development Server:
```bash
npm start
```

The app will open in your browser at [http://localhost:3000](http://localhost:3000)

## Project Structure
- `src/components/` - React components
  - `Navbar.js` - Navigation bar with Netflix logo
  - `Banner.js` - Featured content banner
  - `Row.js` - Movie row with horizontal scroll
- `src/config/` - Configuration files
  - `requests.js` - API endpoints and configuration

## Technologies Used
- React
- TMDB API
- CSS3 with animations
- Fetch API for data fetching

## Environment Variables
The following environment variables are required:
- `REACT_APP_TMDB_API_KEY`: Your TMDB API key

## Coming Soon
- User authentication
- Video playback integration
- My List functionality
- Search feature
