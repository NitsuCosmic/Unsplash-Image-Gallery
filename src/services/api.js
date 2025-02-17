export const APP_ID = import.meta.env.VITE_APP_ID;
export const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;
export const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;
export const BASE_URL = "https://api.unsplash.com/";
export const options = {
	headers: {
		"Content-Type": "application/json",
		Authorization: `Client-ID ${ACCESS_KEY}`,
	},
};
