import React from "react";

export default function PostForm(props) {
	return (
		<div className='PostForm'>
			<form onSubmit={props.handleSubmit}>
				<div>
					<label htmlFor='title'>Position Title: </label>
					<input
						type='text'
						name='title'
						onChange={props.handleChange}
						value={props.data.title}
					/>
				</div>
				<div>
					<label htmlFor='title'>Company Name: </label>
					<input
						type='text'
						name='companyName'
						onChange={props.handleChange}
						value={props.data.companyName}
					/>
				</div>
				<div>
					<label htmlFor='title'>City: </label>
					<input
						type='text'
						name='city'
						onChange={props.handleChange}
						value={props.data.city}
					/>
				</div>
				<div>
					<label htmlFor='title'>State: </label>
					<input
						type='text'
						name='state'
						onChange={props.handleChange}
						value={props.data.state}
					/>
				</div>
				<div>
					<label htmlFor='title'>Description: </label>
					<input
						type='text'
						name='postBody'
						onChange={props.handleChange}
						value={props.data.postBody}
					/>
				</div>
				<button type='submit'>Submit Form</button>
			</form>
		</div>
	);
}
