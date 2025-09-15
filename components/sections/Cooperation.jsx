import Link from 'next/link'
import Marquee from "react-fast-marquee";
import careerMilestones from '@/lib/career-milestone';
import experienceData from '@/lib/experience';

export default function Cooperation() {
	return (
		<>

			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className="p-lg-8 p-md-6 p-3">
										<div className="d-flex align-items-center">
											<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
												<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
											</svg>
											<span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
										</div>
										<h3 className="fw-medium">
											Organizations <span className="text-300">I have <br /></span> worked <span className="text-300">with_</span>
										</h3>
										<div className="my-5 border border-1 rounded-2 p-3">
											{/* Carausel Scroll */}
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												<ul className="carouselTicker__list m-0">
													{
														experienceData.map((experience) => (
															<li className="carouselTicker__item" key={experience.id}>
																<img src={experience.companyImage} style={{ width: '100px', height: '70px' }} alt={experience.companyName} />
															</li>
														))
													}
												</ul>
											</Marquee>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-center gap-3">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="favicon.png" alt="zelio" />
															<svg className="text-primary-2 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 5 6" fill="none">
																<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
															</svg>
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2">
												<Link href="#">
													<i className="ri-linkedin-fill" />
													<span className="text-300">[linkedin] <span className="text-secondary-2">www.linkedin.com/in/md-tanveer-khan</span></span>
												</Link>
												<Link href="#">
													<i className="ri-phone-fill" />
													<span className="text-300">[phone] <span className="text-secondary-2">+358417225412</span></span>
												</Link>
												<Link href="#">
													<i className="ri-mail-fill" />
													<span className="text-300">[email] <span className="text-secondary-2">shadhin.abc@gmail.com</span></span>
												</Link>
											</div>
										</div>
									</div>
									<div className="position-absolute d-none d-md-block decorate">
										<div className="rotateme">
											<div className="circle-1-1" />
											<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
												<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
											<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
												<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
													<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Career insight </span>
								</div>
								<div className="h-100 position-relative">
									<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
										{
											careerMilestones.map((item, index) => (
												<li className="position-relative z-1" key={index}>
													<div className="d-flex align-items-center gap-2">
														<p className="text-300 text-nowrap">{item.year}:</p>
														<span className="text-dark" style={{marginTop : '-15px'}}>{item.title} at {item.organization}</span>
													</div>
												</li>
											))
										}
									</ul>
									<div className="line-left position-absolute border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}
