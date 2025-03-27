import {useState, useEffect } from 'react';
 
const Navbar = () => {
	const [activeSection, setActiveSection] = useState<string>('home');

	const handleScroll = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		id: string,
		offset: number = 0
	) => {
		event.preventDefault();
		const element = document.getElementById(id);
		if (element) {
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const offsetPosition = elementPosition - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(

			(entries) => {
				entries.forEach((entry) => {
					if(entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 } 
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);


	return (
		<nav className="sticky top-7 z-1 text-white bg-slate-900/30 flex justify-center items-center mt-7 px-5 h-15 w-90 md:w-140 mx-auto rounded-4xl backdrop-blur-xl">
			<div className="cursor-pointer flex justify-around items-center w-full font-normal focus:border-amber-900 text-sm">
				<a
					href="#home"
					onClick={(event) => handleScroll(event, "home", 150)}
					className={`px-6 py-2 rounded-3xl ${activeSection === 'home' ? 'bg-sky-200/20' : ''}`}
				>
					Home
				</a>

				<a
					href="#about"
					onClick={(event) => handleScroll(event, "about", 175)}
					className={`px-7 py-2 rounded-3xl ${activeSection === 'about' ? 'bg-sky-200/20' : ''}`}
				>
					About
				</a>

				<a
					href="#skills"
					onClick={(event) => handleScroll(event, "skills", 0)}
					className={`px-7 py-2 rounded-3xl ${activeSection === 'skills' ? 'bg-sky-200/20' : ''}`}
				>
					Skills
				</a>

				<a
					href="#projects"
					onClick={(event) => handleScroll(event, "projects", 0)}
					className={`px-7 py-2 rounded-3xl ${activeSection === 'projects' ? 'bg-sky-200/20' : ''}`}
				>
					Projects
				</a>

				<a
					href="#contact"
					onClick={(event) => handleScroll(event, "contact", 0)}
					className={`px-7 py-2 rounded-3xl ${activeSection === 'contact' ? 'bg-sky-200/20' : ''}`}
				>
					Contact
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
/*
Todo:
1. Add a selected state to the Navbar links
2. Add a hover glow effect to the Navbar links
3. Fix responsiveness of the Navbar
4. Have the selected state change when scrolling to different sections
5. Add a smooth scroll effect when clicking on the Navbar links
6. Add a hamburger menu for mobile
*/
