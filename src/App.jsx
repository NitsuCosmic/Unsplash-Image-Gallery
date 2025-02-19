import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

function App() {
	return (
		<>
			<header className="bg-neutral-50">
				<Navbar />
			</header>
			<main className="bg-neutral-50">
				<section className="max-w-screen-2xl mx-auto py-8 md:px-2">
					<Outlet />
				</section>
			</main>
		</>
	);
}

export default App;
