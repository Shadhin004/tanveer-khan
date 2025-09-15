'use client'

import { useState } from 'react'
import Link from 'next/link'
import experienceData from '@/lib/experience'

export default function Experience() {
    const [currentExperience, setCurrentExperience] = useState(experienceData[0]);

    const handleExperienceClick = (experience) => {
        setCurrentExperience(experience);
    };
	return (
		<>

			<section id="portfolio" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Expericence </span>
								</div>
								<h3>
									+5
									<span className="text-300">years of </span>
									passion
									<span className="text-300">
										for <br />
										programming techniques
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2">
                                            {
                                                experienceData.map((experience) => (
                                                    <div key={experience.id} style={{cursor:'pointer'}} onClick={() => handleExperienceClick(experience)} className={`technology border border-1 rounded-3 p-3 ${currentExperience.id === experience.id ? 'bg-red-500 text-white' : ''}`}>
                                                        <div className="d-flex align-items-center gap-2">
                                                            <img src={experience.companyImage} style={{width : '100px', height: '70px'}} alt={experience.companyName} />
                                                            <div className="d-flex flex-column ms-2">
                                                                <h5 className="mb-1">{experience.companyName}</h5>
                                                                <span className="text-300">{experience.startDate} - {experience.endDate}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
										<h6 className="text-linear-4">{currentExperience.position}</h6>
										<ul className="mt-4">
                                            {
                                                currentExperience.bulletPoints.map((point, index) => (
                                                    <li key={index} className="text-dark mb-3" dangerouslySetInnerHTML={{ __html: point }}></li>
                                                ))
                                            }
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                                            {
                                                currentExperience.technologies.map((tech, index) => (
                                                    <Link key={index} href="#" className="text-300 border border-1 px-3 py-1">{tech}</Link>
                                                ))
                                            }
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="zelio" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
