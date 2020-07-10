import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import PostForm from "./components/PostForm/PostForm";
import Header from "./components/Header/Header";

class App extends Component {
	state = {
		posts: [],
		newJobData: {
			title: "",
			companyName: "",
			city: "",
			state: "",
			postBody: "",
		},
	};

	async componentDidMount() {
		const response = await axios.get("http://localhost:3001/api/posts");
		this.setState({
			posts: response.data,
		});
	}

	handleChange = (event) => {
		const oldState = { ...this.state.newJobData };
		// deep cloning to new alter state directly
		const newState = { ...oldState, [event.target.name]: event.target.value };
		this.setState({
			newJobData: newState,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.handlePostNewJob();
		this.setState({
			newJobData: {
				title: "",
				companyName: "",
				city: "",
				state: "",
				postBody: "",
			},
		});
		console.log("submitted");
	};

	// Posting to the Database the data from this.state.newJobData
	handlePostNewJob = async () => {
		axios
			.post("http://localhost:3001/api/posts", {
				title: this.state.newJobData.title,
				companyName: this.state.newJobData.companyName,
				location: {
					city: this.state.newJobData.city,
					state: this.state.newJobData.state,
				},
				postBody: this.state.newJobData.postBody,
			})
			.then((response) => console.log(response));
	};

	render() {
		return (
			<div className='App'>
				<Header />
				<h1>Hello there from App!</h1>
				<div className='container'>
					<PostForm
						handleSubmit={(event) => this.handleSubmit(event)}
						handleChange={(event) => this.handleChange(event)}
						data={this.state.newJobData}
					/>
					<div className='card-container'>
						{this.state.posts.map((post) => {
							return <Card data={post} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
