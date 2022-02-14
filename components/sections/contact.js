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

	const Contact_page_wrapper = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #ff6161;
		height: 100vh;
		width: 100%;
		margin: 0%;
	`;
	const Title_contact = styled.h1`
		font-size: 2rem;
		color: white;
		text-align: center;
		width: 100%;
	`;
	const Form_layer = styled.div`
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 95vh;
	`;
	const Form_content_layer = styled.div`
		width: 60%;
		display: flex;
		justify-content: center;
	`;
	const Form_info_layer = styled.div`
		display: flex;
		flex-direction: column;
		width: 40%;
	`;

	const Input = styled.input`
		height: 3.5rem;
		width: 25rem;
		margin: 1rem;
	`;
	const Textarea = styled.textarea`
		height: 8rem;
		width: 25rem;
		margin: 1rem;
	`;
	if (submitted) {
		return (
			<>
				<Contact_page_wrapper>
					<div className='submit_text'>Thank you!</div>
					<div className='submit_text'>We will be in touch soon.</div>
				</Contact_page_wrapper>
			</>
		);
	}
	return (
		<Contact_page_wrapper>
			<h1 className='about_title'>Previous Projects</h1>
			<Form_layer>
				<Form_content_layer>
					<form
						action={FORM_ENDPOINT}
						onSubmit={handleSubmit}
						method='POST'
						target='_blank'>
						<div className='mb-3 pt-0'>
							<Input
								type='text'
								placeholder='Your name'
								name='name'
								className='input_name'
								required
							/>
						</div>
						<div className='mb-3 pt-0'>
							<Input
								type='email'
								placeholder='Email'
								name='email'
								className='input_email'
								required
							/>
						</div>
						<div className='mb-3 pt-0'>
							<Textarea
								placeholder='Your message'
								name='message'
								className='input_message'
								required
							/>
						</div>
						<div className='mb-3 pt-0'>
							<button
								className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
								type='submit'>
								Submit
							</button>
						</div>
					</form>
				</Form_content_layer>
				<Form_info_layer></Form_info_layer>
			</Form_layer>
		</Contact_page_wrapper>
	);
};

export default ContactForm;
