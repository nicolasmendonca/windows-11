import type { PageLoad } from './$types';

const desktopIcons = ['Windows 11', 'Mars Software Solutions'];
const openedApps = [];

export const load = (async () => {
	return {
		desktopIcons,
		openedApps
	};
}) satisfies PageLoad;
