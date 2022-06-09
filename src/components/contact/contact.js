import styled from 'styled-components';
import React, { useState } from 'react';

const FORM_ENDPOINT = '';

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false);
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true);
		}, 100);
	};
	const Input = styled.input`
		height: 3rem;
		width: 20rem;
		margin: 1rem;
		padding: 0.2rem;
		font-size: 1.2rem;
	`;
	const Textarea = styled.textarea`
		height: 10rem;
		width: 25rem;
		margin: 1rem;
		padding: 0.2rem;
		font-size: 1.2rem;
	`;
	if (submitted) {
		return (
			<>
				<div className='contact_page'>
					<div className='submit_text'>Thank you!</div>
					<div className='submit_text'>We will be in touch soon.</div>
				</div>
			</>
		);
	}
	return (
		<div className='contact_page'>
			<h1 className='about_title'>Contact me</h1>
			<div className='form_container'>
				<div className='form_container_inner'>
					<form
						action={FORM_ENDPOINT}
						onSubmit={handleSubmit}
						method='POST'
						target='_blank'>
						<div className=''>
							<Input
								type='text'
								placeholder='Your name'
								name='name'
								className='input_name'
								required
							/>
						</div>
						<div className=''>
							<Input
								type='email'
								placeholder='Email'
								name='email'
								className='input_email'
								required
							/>
						</div>
						<div className=''>
							<Textarea
								placeholder='Your message'
								name='message'
								className='input_message'
								required
							/>
						</div>
						<div className=''>
							<button className='submit_btn' type='submit'>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='form_info_container'>
					<div className='title_container_contact'>
						<h1 className='contact_info_title'>Other means of contact</h1>
					</div>
					<div className='text_container_info'>
						<p>E-mail: Aleksanderspetalen@gmail.com</p>
						<br />
						<p>gitHub: https://github.com/spettenn</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
