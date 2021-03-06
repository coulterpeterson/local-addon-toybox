import React, { Component } from "react";
import {
	Title,
	InputPasswordToggle,
	BasicInput,
	PrimaryButton
} from "@getflywheel/local-components";

export default class Toybox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			siteStatus: null,
			siteDomain: null,
			siteId: null,
			siteName: null
		};
	}

	componentDidMount() {
		let routeChildrenProps = this.props.routeChildrenProps;
		let siteStatus = routeChildrenProps.siteStatus;
		let site = routeChildrenProps.site;

		let siteDomain = site.domain;
		let siteName = site.name;
		let siteId = site.id;

		this.updateSiteStatus(siteStatus);
		this.updateSiteDomain(siteDomain);
		this.updateSiteId(siteId);
		this.updateSiteName(siteName);
	}

	updateSiteStatus(newStatus) {
		this.setState(prevState => ({
			siteStatus: newStatus
		}));
	}

	updateSiteDomain(domain) {
		this.setState(prevState => ({
			siteDomain: domain
		}));
	}

	updateSiteId(id) {
		this.setState(prevState => ({
			siteId: id
		}));
	}

	updateSiteName(name) {
		this.setState(prevState => ({
			siteName: name
		}));
	}

	render() {
		let signUpUrl = `https://app.toyboxsystems.com/users/sign_up?flywheel=true&siteName=${this.state.siteName}&siteDomain=${this.state.siteDomain}`;

		return (
			<div
				style={{ flex: 1, overflowY: "auto", padding: 30 }}
				className="max-w-2xl"
			>
				<Title>Sign into your account</Title>
				<p>
					Don't have a Toybox account?{" "}
					<a href={signUpUrl}>Create one here for free.</a>
				</p>

				<Title size="s" className="pb-4">
					Email
				</Title>

				<BasicInput
					onChange={event => console.log("onChange: ", event)}
				/>

				<Title size="s" className="pb-4">
					API Key{" "}
					<a href="https://app.toyboxsystems.com/settings?api=true">
						Find your key here
					</a>
				</Title>

				<InputPasswordToggle
					onChange={event => console.log("onChange: ", event)}
				/>

				<PrimaryButton
					onClick={() => console.log("Clicked!")}
					className="mt-10"
				>
					Sign In
				</PrimaryButton>
			</div>
		);
	}
}
