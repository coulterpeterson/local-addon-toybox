import React, { Component } from "react";
import { Title } from "@getflywheel/local-components";

export default class Toybox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			siteStatus: null,
			siteDomain: null,
			siteId: null
		};
	}

	componentDidMount() {
		let routeChildrenProps = this.props.routeChildrenProps;
		console.log(routeChildrenProps);
		// let siteStatus = routeChildrenProps.siteStatus;
		// let site = routeChildrenProps.site;
		// let siteDomain = site.domain;

		// let siteId = routeChildrenProps.site.id;

		// this.testSiteRootUrlVariantsAndUpdate(siteDomain);
		// this.updateSiteId(siteId);
		// this.updateSiteState(siteStatus);
	}

	render() {
		let signUpUrl = "";
		//let signUpUrl = `https://app.toyboxsystems.com/users/sign_up?flywheel=true&siteName=${site.name}&siteDomain=${site.domain}`;

		return (
			<div style={{ flex: 1, overflowY: "auto", padding: 30 }}>
				<Title>Sign into your account</Title>
				<p>
					Don't have a Toybox account?{" "}
					<a href={signUpUrl}>Create one here for free.</a>
				</p>
			</div>
		);
	}
}
