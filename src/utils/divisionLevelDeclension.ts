import { DivisionLevel } from '../interfaces';

export const divisionLevelDeclension = (divisionLevel: DivisionLevel) => {
	switch (divisionLevel) {
		case 'COUNTRY': {
			return 'стране';
			break;
		}
		case 'TERB': {
			return 'тербанке';
			break;
		}
		case 'CLUSTER': {
			return 'кластере';
			break;
		}
		default: {
			return 'подразделении';
		}
	}
};
