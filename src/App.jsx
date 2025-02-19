import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<section className="max-w-screen-2xl mx-auto py-8 md:px-2">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default App;
