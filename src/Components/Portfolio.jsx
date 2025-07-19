/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

const projectList = [
	{
		title: "10 Things To Know About Azure Static Web Apps 🎉",
		description:
			"Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
		url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
	},
	{
		title: "Web Development for Beginners",
		description:
			"Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
		url: "https://github.com/microsoft/web-dev-for-beginners",
	},
	{
		title: "My Resume Site",
		description:
			"Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
		url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
	},
	{
		title: "GitHub Codespaces and github.dev",
		description:
			"Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
		url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
	},
];

const Portfolio = () => {
	return (
		<section className="padding relative" id="portfolio">
			{/* Header */}
			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
						Portfolio
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
					<p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
						Showcasing my recent projects and contributions to the tech community
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectList.map((project, index) => (
						<div
							key={index}
							className="group animate-slideUp"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/20 h-full">
								{/* Content */}
								<div className="space-y-4">
									<h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-700 transition-colors duration-300">
										{project.title}
									</h3>

									<p className="text-gray-600 leading-relaxed">
										{project.description}
									</p>

									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
									>
										<span>View Project</span>
										<svg
											className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</a>
								</div>

								{/* Decorative element */}
								<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

								{/* Bottom accent line */}
								<div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
							</div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div className="text-center mt-16">
					<div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
						<span>View More Projects</span>
						<svg
							className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
