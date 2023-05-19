import type { PageLoad } from './$types';

const desktopIcons = ['Microsoft Edge', 'Mars Software Solutions'];
const openedApps = ['Microsoft Edge'];

export const load = (async () => {
	return {
		desktopIcons,
		openedApps
	};
}) satisfies PageLoad;
