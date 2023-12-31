import { Reward } from "../interfaces";
import фотоБерстеневаАлена from "../assets/images/Берстенева Алена Викторовна.jpeg";
import фотоДуроваНаталья from "../assets/images/Дурова Наталья Юрьевна.jpeg";
import фотоКарагодинаМария from "../assets/images/Карагодина Мария Анатольевна.jpeg";
import фотоТомсонЕкатерина from "../assets/images/Томсон Екатерина Андреевна.jpeg";
import фотоСорокинИлья from "../assets/images/Сорокин Илья Юрьевич.jpeg";
import фотоПроскуринаЕлена from "../assets/images/Проскурина Елена Михайловна.jpeg";
import фотоКротковНиколай from "../assets/images/Кротков Николай Андреевич.jpeg";
import фотоКирееваЮлия from "../assets/images/Киреева Юлия Сергеевна.jpeg";
import фотоХасаншинаВенера from "../assets/images/Хасаншина Венера Хамитовна.jpeg";
import фотоДмитриеваВероника from "../assets/images/Дмитриева Вероника Алексеевна.jpeg";
import фотоКодоловаЕлена from "../assets/images/Кодолова Елена Аркадьевна.jpeg";
import фотоМитренкоАндрей from "../assets/images/Митренко Андрей Игоревич.jpeg";
import фотоАдиевРашид from "../assets/images/Адиев Рашид Абусат оглы.jpeg";
import фотоБобокАлександр from "../assets/images/Бобок Александр Юрьевич.jpeg";
import фотоШебановаОльга from "../assets/images/Шебанова Ольга Евгеньевна.jpeg";
import фотоЧернецВиктория from "../assets/images/Чернец Виктория Александровна.jpeg";
import фотоСавушкинаЭмма from "../assets/images/Савушкина Эмма Александровна.jpeg";
import фотоКунинаТатьяна from "../assets/images/Кунина Татьяна Сергеевна.jpeg";
import фотоБорбликМихаил from "../assets/images/Борблик Михаил Анатольевич.jpeg";
import фотоОрловаЮлия from "../assets/images/Орлова Юлия Валериевна.jpeg";
import фотоМакаровПавел from "../assets/images/Макаров Павел Сергеевич.jpeg";
import фотоСенотрусоваЮлия from "../assets/images/Сенотрусова Юлия Юрьевна.jpeg";
import фотоТихомироваМария from "../assets/images/Тихомирова Мария Алексеевна.jpeg";
import фотоГайнРоман from "../assets/images/romanGayn.png";
import фотоШаброваИрина from "../assets/images/Шаброва Ирина Сергеевна.jpeg";
import фотоСеркбаеваАлтын from "../assets/images/Серкбаева Алтын Суннатовна.jpeg";
import фотоЖаглинаЖанна from "../assets/images/Жаглина Жанна Маратовна.jpeg";

export const colorCodeExpert = {
  primary: "orange-60",
  secondary: "orange-30",
};
export const colorCodeMaster = {
  primary: "blue-60",
  secondary: "blue-30",
};

export const colorCodeSpecialist = {
  primary: "light-green-30",
  secondary: "light-green-20",
};

const МитосевЯрослав = {
  profileNumber: "11",
  lastName: "Митосев",
  firstName: "Ярослав",
  photoData: "",
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "1",
  reward: undefined,
  placeInRating: 33,
  terDivisionName: "МБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const БерстеневаАлена = {
  profileNumber: "19",
  lastName: "Берстенева",
  firstName: "Алена",
  photoData: фотоБерстеневаАлена,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "2",
  reward: undefined,
  placeInRating: 32,
  terDivisionName: "СИБ",
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

const КротковНиколай = {
  profileNumber: "26",
  lastName: "Кротков",
  firstName: "Николай",
  photoData: фотоКротковНиколай,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "3",
  reward: undefined,
  placeInRating: 31,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ДмитриеваВероника = {
  profileNumber: "10",
  lastName: "Дмитриева",
  firstName: "Вероника",
  photoData: фотоДмитриеваВероника,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "3",
  reward: undefined,
  placeInRating: 30,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const БрусницынаМария = {
  profileNumber: "27",
  lastName: "Брусницына",
  firstName: "Мария",
  photoData: "",
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "4",
  reward: undefined,
  placeInRating: 29,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const КодоловаЕлена = {
  profileNumber: "6",
  lastName: "Кодолова",
  firstName: "Елена",
  photoData: фотоКодоловаЕлена,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "4",
  reward: undefined,
  terDivisionName: "СРБ",
  placeInRating: 28,
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const КирееваЮлия = {
  profileNumber: "29",
  lastName: "Киреева",
  firstName: "Юлия",
  photoData: фотоКирееваЮлия,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "ЦЧБ",
  placeInRating: 27,
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const АдиевРашид = {
  profileNumber: "20",
  lastName: "Адиев",
  firstName: "Рашид",
  photoData: фотоАдиевРашид,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "СИБ",
  placeInRating: 26,
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const ЗахаровАлександр = {
  profileNumber: "16",
  lastName: "Захаров",
  firstName: "Александр",
  photoData: "",
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "СЗБ",
  placeInRating: 25,
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const КарагодинаМария = {
  profileNumber: "13",
  lastName: "Карагодина",
  firstName: "Мария",
  photoData: фотоКарагодинаМария,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "ПБ",
  placeInRating: 24,
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const СорокинИлья = {
  profileNumber: "8",
  lastName: "Сорокин",
  firstName: "Илья",
  photoData: фотоСорокинИлья,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 23,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const БобокАлександр = {
  profileNumber: "12",
  lastName: "Бобок",
  firstName: "Александр",
  photoData: фотоБобокАлександр,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "7",
  reward: undefined,
  terDivisionName: "МБ",
  placeInRating: 22,
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const ПроскуринаЕлена = {
  profileNumber: "2",
  lastName: "Проскурина",
  firstName: "Елена",
  photoData: фотоПроскуринаЕлена,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "7",
  reward: undefined,
  terDivisionName: "СРБ",
  placeInRating: 21,
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const СорокинаМарина = {
  profileNumber: "17",
  lastName: "Сорокина",
  firstName: "Марина",
  photoData: "",
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "8",
  reward: undefined,
  placeInRating: 20,
  terDivisionName: "СЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};
const ТомсонЕкатерина = {
  profileNumber: "21",
  lastName: "Томсон",
  firstName: "Екатерина",
  photoData: фотоТомсонЕкатерина,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "9",
  reward: undefined,
  terDivisionName: "СИБ",
  placeInRating: 19,
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ДуроваНаталья = {
  profileNumber: "28",
  lastName: "Дурова",
  firstName: "Наталья",
  photoData: фотоДуроваНаталья,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "13",
  reward: undefined,
  terDivisionName: "СРБ",
  placeInRating: 18,
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

const МитренкоАндрей = {
  profileNumber: "7",
  lastName: "Митренко",
  firstName: "Андрей",
  photoData: фотоМитренкоАндрей,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "14",
  reward: undefined,
  terDivisionName: "СРБ",
  placeInRating: 17,
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const ХасаншинаВенера = {
  profileNumber: "5",
  lastName: "Хасаншина",
  firstName: "Венера",
  photoData: фотоХасаншинаВенера,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "14",
  reward: undefined,
  placeInRating: 16,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ШебановаОльга = {
  profileNumber: "31",
  lastName: "Шебанова",
  firstName: "Ольга",
  photoData: фотоШебановаОльга,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "17",
  reward: undefined,
  placeInRating: 15,
  terDivisionName: "ЮЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const ЧернецВиктория = {
  profileNumber: "33",
  lastName: "Чернец",
  firstName: "Виктория",
  photoData: фотоЧернецВиктория,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "19",
  placeInRating: 14,
  reward: undefined,
  terDivisionName: "ЮЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ЖаглинаЖанна = {
  profileNumber: "30",
  lastName: "Жаглина",
  firstName: "Жанна",
  photoData: фотоЖаглинаЖанна,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "19",
  reward: undefined,
  placeInRating: 13,
  terDivisionName: "ЦЧБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const КунинаТатьяна = {
  profileNumber: "15",
  lastName: "Кунина",
  firstName: "Татьяна",
  photoData: фотоКунинаТатьяна,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "20",
  placeInRating: 12,
  reward: undefined,
  terDivisionName: "ПБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ЧернякРуфина = {
  profileNumber: "3",
  lastName: "Черняк",
  firstName: "Руфина",
  photoData: "",
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "21",
  reward: undefined,
  placeInRating: 11,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

const СавушкинаЭмма = {
  profileNumber: "18",
  lastName: "Савушкина",
  firstName: "Эмма",
  photoData: фотоСавушкинаЭмма,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "22",
  reward: undefined,
  placeInRating: 10,
  terDivisionName: "СЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const БорбликМихаил = {
  profileNumber: "32",
  lastName: "Борблик",
  firstName: "Михаил",
  photoData: фотоБорбликМихаил,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "23",
  reward: undefined,
  placeInRating: 9,
  terDivisionName: "ЮЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

const ОрловаЮлия = {
  profileNumber: "14",
  lastName: "Орлова",
  firstName: "Юлия",
  photoData: фотоОрловаЮлия,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "23",
  reward: undefined,
  placeInRating: 8,
  terDivisionName: "ПБ",
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

const СенотрусоваЮлия = {
  profileNumber: "9",
  lastName: "Сенотрусова",
  firstName: "Юлия",
  photoData: фотоСенотрусоваЮлия,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "24",
  reward: undefined,
  placeInRating: 7,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const МакаровПавел = {
  profileNumber: "1",
  lastName: "Макаров",
  firstName: "Павел",
  photoData: фотоМакаровПавел,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "24",
  reward: undefined,
  placeInRating: 6,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const ТихомироваМария = {
  profileNumber: "23",
  lastName: "Тихомирова",
  firstName: "Мария",
  photoData: фотоТихомироваМария,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "26",
  reward: undefined,
  placeInRating: 5,
  terDivisionName: "СРБ",
  progress: {
    userLevel: {
      currentLevelName: "Специалист",
      colorCode: colorCodeSpecialist,
    },
  },
};

const ГайнРоман = {
  profileNumber: "22",
  lastName: "Гайн",
  firstName: "Роман",
  photoData: фотоГайнРоман,
  colorCode: colorCodeMaster,
  isMarked: true,
  indicatorValue: "27",
  placeInRating: 4,
  reward: undefined,
  terDivisionName: "СРБ",
};

const ШаброваИрина = {
  profileNumber: "24",
  lastName: "Шаброва",
  firstName: "Ирина",
  photoData: фотоШаброваИрина,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "28",
  reward: {
    icon: Reward.silver,
  },
  placeInRating: 3,
  terDivisionName: "МБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const КатаеваВероника = {
  profileNumber: "4",
  lastName: "Катаева",
  firstName: "Вероника",
  photoData: "",
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "29",
  reward: {
    icon: Reward.silver,
  },
  placeInRating: 2,
  terDivisionName: "ЮЗБ",
  progress: {
    userLevel: {
      currentLevelName: "Эксперт",
      colorCode: colorCodeExpert,
    },
  },
};

const СеркбаеваАлтын = {
  profileNumber: "25",
  lastName: "Серкбаева",
  firstName: "Алтын",
  photoData: фотоСеркбаеваАлтын,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "30",
  reward: {
    icon: Reward.gold,
    tooltip: "Претендент на победу",
  },
  placeInRating: 1,
  terDivisionName: "ДВБ",
  progress: {
    userLevel: {
      currentLevelName: "Мастер",
      colorCode: colorCodeMaster,
    },
  },
};

export const leaders = [
  МитосевЯрослав,
  БерстеневаАлена,
  КротковНиколай,
  ДмитриеваВероника,
  БрусницынаМария,
  КодоловаЕлена,
  КирееваЮлия,
  АдиевРашид,
  ЗахаровАлександр,
  КарагодинаМария,
  СорокинИлья,
  БобокАлександр,
  ПроскуринаЕлена,
  СорокинаМарина,
  ТомсонЕкатерина,
  ДуроваНаталья,
  МитренкоАндрей,
  ХасаншинаВенера,
  ШебановаОльга,
  ЧернецВиктория,
  ЖаглинаЖанна,
  КунинаТатьяна,
  ЧернякРуфина,
  СавушкинаЭмма,
  БорбликМихаил,
  ОрловаЮлия,
  СенотрусоваЮлия,
  МакаровПавел,
  ТихомироваМария,
  ГайнРоман,
  ШаброваИрина,
  КатаеваВероника,
  СеркбаеваАлтын,
];
