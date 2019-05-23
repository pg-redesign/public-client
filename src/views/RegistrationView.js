import React, { Component } from "react";
// import PropTypes from "prop-types";
import {
	Form,
	Header,
	Card,
	Button,
	Grid,
	Divider,
	Input,
	Label,
	Container,
	Message,
	Icon,
	Transition,
} from "semantic-ui-react";

import { CourseCardTop } from "../components/CourseCard";

// TODO: remove after connecting to API
import { upcomingCourses } from "./mock-data";

class StaticAnimation extends Component {
	static propTypes = Transition.propTypes;

	state = {
		visible: true,
	};

	componentDidUpdate = previousProps => {
		const { animate } = this.props;
		if (animate && !previousProps.animate) {
			this.handleAnimate();
		}
	};

	handleAnimate = () => this.setState(state => ({ visible: !state.visible }));

	render = () => {
		const { visible } = this.state;
		const { animation, children } = this.props;

		return (
			<Transition animation={animation} visible={visible}>
				{children}
			</Transition>
		);
	};
}

const isValidCourseID = (courseID, courses) =>
	courses.some(course => course.id === Number(courseID));

const courseButton = (courseData, selectedCourseID, handleChange) => {
	const handleClick = event =>
		handleChange(event, { name: "courseID", value: courseData.id });

	return (
		<Button
			inverted
			compact
			onClick={handleClick}
			style={{ margin: "10px" }}
			className="registration-button"
			key={`course-select-${courseData.id}`}
			active={selectedCourseID === courseData.id}
		>
			<Card color="grey" raised>
				<CourseCardTop {...courseData} />
				<Card.Content textAlign="center" style={{ color: "black" }}>
					<Icon name="dollar sign" color="green" fitted />{" "}
					{courseData.cost || 1695} USD
				</Card.Content>
			</Card>
		</Button>
	);
};

export default class RegistrationView extends Component {
	static propTypes = {};
	static defaultProps = {
		data: {
			viewData: {
				courses: upcomingCourses,
				referenceOptions: [
					{ text: "newsletter", value: "email" },
					{ text: "a colleague", value: "colleague" },
				],
			},
		},
	};

	constructor(props) {
		super(props);

		this.state = {
			fields: {
				courseID: "",
				firstName: "",
				lastName: "",
				email: "",
				city: "",
				state: "",
				country: "",
				company: "",
				mailingList: false,
				reference: "",
				paymentType: "",
			},
			errors: {},
		};

		const { match, data } = props;
		const { courseID } = match.params;
		const { courses } = data.viewData;

		if (courseID && isValidCourseID(courseID, courses)) {
			this.state.fields.courseID = Number(courseID);
		}
	}

	handleChange = (event, target) =>
		this.setState(state => {
			const { name, value } = target;
			const { fields, errors, disabled } = state;
			console.log({ fields, target });
			return { fields: { ...fields, [name]: value } };
		});

	handleCheckbox = (event, target) => {
		const { name, checked } = target;
		this.handleChange(event, { name, value: checked });
	};

	shakeForm = () =>
		this.setState({ shouldShake: true }, () =>
			this.setState({ shouldShake: false }),
		);

	formIsValid = () => {
		const { errors } = this.state;
		// TODO: validate here or onChange?
	};

	handleSubmit = event => {
		event.preventDefault();

		const { fields, errors } = this.state;
		console.log({ fields });

		if (!this.formIsValid()) {
			this.shakeForm();
		}
		// TODO: submit mutation
	};

	labelOrError = (fieldName, labelText, errorText) => {
		const error = this.state.errors[fieldName];

		if (!error) return <Label basic content={labelText} />;

		return (
			<Label
				basic
				color="red"
				size="large"
				horizontal
				pointing="right"
				content={errorText || "invalid entry"}
			/>
		);
	};

	render() {
		const { courses } = this.props.data.viewData;
		const { fields, shouldShake } = this.state;

		return (
			<Form>
				<Header
					as="h1"
					textAlign="center"
					content="Course Registration"
					inverted
				/>
				<Divider section />

				<Grid container centered>
					<Grid.Row>
						<Header as="h2" inverted content="Select a Course" />
					</Grid.Row>
					<Grid.Row>
						{courses.map(courseData =>
							courseButton(courseData, fields.courseID, this.handleChange),
						)}
					</Grid.Row>
				</Grid>
				<Divider clearing hidden />

				{/* student info */}
				<StaticAnimation animation="shake" animate={shouldShake}>
					<Container style={{ width: "80%" }}>
						<Form.Group widths="equal">
							<Form.Field width="6">
								<Input
									name="firstName"
									value={fields.firstName}
									onChange={this.handleChange}
									label={this.labelOrError("firstName", "First Name")}
								/>
							</Form.Field>
							<Form.Field width="6">
								<Input
									inverted
									name="lastName"
									value={fields.lastName}
									onChange={this.handleChange}
									label={this.labelOrError("lastName", "Last Name")}
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group widths="equal">
							<Form.Field width="8">
								<Input
									name="company"
									value={fields.company}
									onChange={this.handleChange}
									label={this.labelOrError("company", "Company")}
								/>
							</Form.Field>
							<Form.Field width="8">
								<Input
									name="email"
									type="email"
									value={fields.email}
									onChange={this.handleChange}
									label={this.labelOrError("email", "Email", "invalid email")}
								/>
							</Form.Field>
						</Form.Group>
						<Form.Group widths="equal">
							<Form.Field width="5">
								<Input
									name="city"
									value={fields.city}
									onChange={this.handleChange}
									label={this.labelOrError("city", "City")}
								/>
							</Form.Field>
							<Form.Field width="5">
								<Input
									name="state"
									value={fields.state}
									onChange={this.handleChange}
									label={this.labelOrError("state", "State")}
								/>
							</Form.Field>
							<Form.Field width="5">
								<Input
									name="country"
									value={fields.country}
									onChange={this.handleChange}
									label={this.labelOrError("country", "Country")}
								/>
							</Form.Field>
						</Form.Group>

						<Grid centered container>
							<Grid.Row>
								<Message compact positive>
									<Message.Header content="Would you like to join our mailing list?" />
									<Message.List>
										<Message.Item>
											We will <strong>never spam or sell</strong> your contact
											information
										</Message.Item>
										<Message.Item>
											We <strong>only send 4-5 emails per year</strong> about
											upcoming courses and events
										</Message.Item>
									</Message.List>
									<Divider />
									<Form.Checkbox
										toggle
										name="mailingList"
										checked={fields.mailingList}
										onClick={this.handleCheckbox}
									/>
								</Message>
							</Grid.Row>
							<Grid.Row>
								<Form.Button
									type="submit"
									inverted
									size="huge"
									// disabled={disabled}
									onClick={this.handleSubmit}
									content="Continue to Payment"
								/>
							</Grid.Row>
						</Grid>
					</Container>
				</StaticAnimation>
			</Form>
		);
	}
}
