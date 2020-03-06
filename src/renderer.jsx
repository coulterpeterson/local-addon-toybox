import Toybox from "./Toybox";
import path from "path";

export default function(context) {
	const { React, hooks } = context;
	const { Route } = context.ReactRouter;
	const stylesheetPath = path.resolve(__dirname, "../main.css");

	hooks.addContent("stylesheets", () => (
		<link
			rel="stylesheet"
			key="toybox-addon-styleesheet"
			href={stylesheetPath}
		/>
	));

	// Create the route/page of content that will be displayed when the menu option is clicked
	hooks.addContent("routesSiteInfo", ({ routeChildrenProps }) => (
		<Route
			key="toybox-addon"
			path="/main/site-info/:siteID/toybox"
			render={props => (
				<Toybox {...props} routeChildrenProps={routeChildrenProps} />
			)}
		/>
	));

	// Add menu option within the site menu bar
	hooks.addFilter("siteInfoMoreMenu", function(menu, site) {
		menu.push({
			label: "Toybox",
			enabled: true,
			click: () => {
				context.events.send(
					"goToRoute",
					`/main/site-info/${site.id}/toybox`
				);
			}
		});

		return menu;
	});
}
