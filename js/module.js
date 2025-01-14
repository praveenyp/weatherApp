/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright bassu 2023 All rights reserved
 * @author bassu <basavarajakj16@gmail.com>
 */

'use strict';

export const weekDayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

export const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

/**
 * @param {number} dateUnix unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String, formate: "Monday 10, Mar"
 */
export const getDate = function (dateUnix, timezone) {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayName = weekDayNames[date.getUTCDay()];
	const monthName = monthNames[date.getUTCMonth()];

	return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const period = hours >= 12 ? 'PM' : 'AM';

	return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const period = hours >= 12 ? 'PM' : 'AM';

	return `${hours % 12 || 12} ${period}`;
};

/**
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hours
 */
export const mps_to_kmh = (mps) => {
	const mph = mps * 3600;
	return mph / 1000;
};

export const aqiText = {
	1: {
		level: 'Good',
		message:
			'Air Quality is consider satisfactory,  and air pollution poses little or no risk',
	},
	2: {
		level: 'Fair',
		message:
			'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are usually sensitive to air pollution',
	},
	3: {
		level: 'moderate',
		message:
			'Members are sensitive groups may experience health effects; members of sensitive groups is not likely to be affected.',
	},
	4: {
		level: 'Poor',
		message:
			'Everyone may begins to experience health effects;members of sensitive groups may experience more serious health effects.',
	},
	5: {
		level: 'Very poor',
		message:
			'Health warnings of emergency conditions. The entire population is more likely to be affected.',
	},
};

export function getImageUrl(name) {
	const newURl =  new URL(`../public/images/${name}.png`, import.meta.url).href;
	return newURl
}