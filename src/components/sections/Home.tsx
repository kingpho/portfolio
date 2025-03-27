import { Coolshape } from "coolshapes-react";

const Home = () => {
	return (
		<section id="home" className="mt-30 min-h-screen" >
			<div className="flex justify-center ml-85 md:ml-170 xl:ml-310 " max-width="100px">
				<Coolshape type="star" index={7} noise={true} size={40} />
			</div>

			<h1 className="text-sky-200 font-bold text-4xl md:text-7xl xl:text-[128px] flex justify-center items-center drop-shadow-md">
				Hi there. I'm Adrian.
			</h1>

			<h2 className="text-sky-200 font-light text-4xl md:text-7xl xl:text-[128px] flex justify-center items-center">
				A recent CS grad
			</h2>
            
			<div className="flex justify-center mr-85 md:mr-170 xl:mr-310" >
			<Coolshape type="star" index={7} noise={true} size={40} className="xl:size={100}" />
			</div>

            <div>
                <p className="text-sky-200 font-medium text-lg md:text-2xl flex justify-center items-center drop-shadow-md w-1/2 mx-auto text-center">
                    I'm interested in web development; particularly user-centric, attractive, and functional frontend!
                </p>
            </div>
		</section>
	);
};

export default Home;
