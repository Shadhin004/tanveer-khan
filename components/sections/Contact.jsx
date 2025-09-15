'use client'
import { useState } from "react";

export default function Contact() {

	const [status, setStatus] = useState('Send Message');
	const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
	phone: "",
	subject: "",
  });


	const handleSubmit = async (e) => {
		e.preventDefault();
		
		if (!formData.name || !formData.email || !formData.message || !formData.phone || !formData.subject) {
			setStatus("Please fill in all fields.");
			return;
			}

		 setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "", phone: "", subject: "" });
		setTimeout(() => setStatus("Send Message"), 3000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
	};
	return (
		<>

			<section id="contact" className="section-contact-2 position-relative py-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form onSubmit={(e)=> handleSubmit(e)}>
										<div className="row g-3">
											<div className="col-md-6 ">
												<input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username" />
											</div>
											<div className="col-md-6">
												<input required type="text" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone" />
											</div>
											<div className="col-md-6">
												<input required type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Email" aria-label="email" />
											</div>
											<div className="col-md-6">
												<input required type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject" />
											</div>
											<div className="col-12">
												<textarea required className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													{status}
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+358 41 722 54 12</h6>
								</div>
								<a href="tel:+358417225412" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">shadhin.abc@gmail.com</h6>
								</div>
								<a href="mailto:shadhin.abc@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-github-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Github</span>
									<h6 className="mb-0">https://github.com/Shadhin004</h6>
								</div>
								<a href="skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">Vanhan vaasan katu 12, 65370, Vaasa, Finland</h6>
								</div>
								<a href="https://maps.google.com/maps?q=Vanhan+vaasan+katu+12,+65370,+Vaasa,+Finland" className="position-absolute top-0 start-0 w-100 h-100" target='_blank'/>
							</div>
						</div>
					</div>
				</div>
			</section>



		</>
	)
}
