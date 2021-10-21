export const pipeDuration = (duration) => {
	if (duration !== 0) {
		const min = duration % 60;
		const hour = (duration - min) / 60;
		return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`;
	} else {
		return '00:00';
	}
};
