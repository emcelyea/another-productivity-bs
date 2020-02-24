import {AsyncStorage} from 'react-native';
import moment from 'moment';

const storeDefaults = {
	'dailies': {
		default: [],
		type: 'array'
	},
	'dailies-Logs': {
		default: [],
		entry: {},
		type: 'array'
	}
}

const correctType = (item, data) => {
	const type = storeDefaults[item].type;
	switch(type) {
		case 'array':
			return Array.isArray(data);
		default:
			return false;
	}
}
const storage = {
	addItem: async (name, item) => {
		if (!storeDefaults.hasOwnProperty(name)) {
			return null;
		}
		const entry = {...item, date: moment().format('YY-MM-DD'), active: true};
		let entries = await AsyncStorage.getItem(name);
		entries = entries && JSON.parse(entries);
		const withNewEntry = [...(entries || []), entry]
		AsyncStorage.setItem(name, JSON.stringify(withNewEntry));	
	},
	getItem: async (name) => {
		if (!storeDefaults.hasOwnProperty(name)) {
			return null;
		}

		const value = await AsyncStorage.getItem(name);
		if (value !== null) {
			return JSON.parse(value);
		} else {
			return storeDefaults[name].default;
		}
	},
	removeItem: async (name, item) => {
		if (!storeDefaults.hasOwnProperty(name)) {
			return null;
		}
		let entries = await AsyncStorage.getItem(name);
		entries = JSON.parse(entries).filter(e => e.name !== item.name);
		AsyncStorage.setItem(name, JSON.stringify(withNewEntry));			
	},
	// data logged with jank ass time signature - yyyy-mm-dd, include unix timestamp for future concerns
	logData: async (item, data) => {
		if (!storeDefaults.hasOwnProperty(`${item}-Logs`)) {
			return null;
		}

		const entry = {...data, date: moment().format('YY-MM-DD')};
		const entries = AsyncStorage.getData(`${item}-Logs`);
		const withNewEntry = {...JSON.parse(entries), entry}
		AsyncStorage.setData(`${item}-Logs`, withNewEntry);
	}
};

export default storage;