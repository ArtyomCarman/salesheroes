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
import фотоКузьменкоИгорь from "../assets/images/Кузьменко Игорь Владимирович1.jpeg";
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
  employeeNumber: "11",
  lastName: "Митосев",
  firstName: "Ярослав",
  photoData: "",
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "1",
  reward: undefined,
  placeInRating: 33,
  terDivisionName: "МБ",
};

const БерстеневаАлена = {
  employeeNumber: "19",
  lastName: "Берстенева",
  firstName: "Алена",
  photoData: фотоБерстеневаАлена,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "2",
  reward: undefined,
  placeInRating: 32,
  terDivisionName: "СИБ",
};

const КротковНиколай = {
  employeeNumber: "26",
  lastName: "Кротков",
  firstName: "Николай",
  photoData: фотоКротковНиколай,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "3",
  reward: undefined,
  placeInRating: 31,
  terDivisionName: "УБ",
};

const ДмитриеваВероника = {
  employeeNumber: "10",
  lastName: "Дмитриева",
  firstName: "Вероника",
  photoData: фотоДмитриеваВероника,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "3",
  reward: undefined,
  placeInRating: 30,
  terDivisionName: "МБ",
};

const БрусницынаМария = {
  employeeNumber: "27",
  lastName: "Брусницына",
  firstName: "Мария",
  photoData: "",
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "4",
  reward: undefined,
  placeInRating: 29,
  terDivisionName: "УБ",
};

const КодоловаЕлена = {
  employeeNumber: "6",
  lastName: "Кодолова",
  firstName: "Елена",
  photoData: фотоКодоловаЕлена,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "4",
  reward: undefined,
  terDivisionName: "ВВБ",
  placeInRating: 28,
};

const КирееваЮлия = {
  employeeNumber: "29",
  lastName: "Киреева",
  firstName: "Юлия",
  photoData: фотоКирееваЮлия,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "ЦЧБ",
  placeInRating: 27,
};

const АдиевРашид = {
  employeeNumber: "20",
  lastName: "Адиев",
  firstName: "Рашид",
  photoData: фотоАдиевРашид,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "СИБ",
  placeInRating: 26,
};

const ЗахаровАлександр = {
  employeeNumber: "16",
  lastName: "Захаров",
  firstName: "Александр",
  photoData: фотоКодоловаЕлена,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "СЗБ",
  placeInRating: 25,
};

const КарагодинаМария = {
  employeeNumber: "13",
  lastName: "Карагодина",
  firstName: "Мария",
  photoData: фотоКарагодинаМария,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  terDivisionName: "ПБ",
  placeInRating: 24,
};

const СорокинИлья = {
  employeeNumber: "8",
  lastName: "Сорокин",
  firstName: "Илья",
  photoData: фотоСорокинИлья,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "5",
  reward: undefined,
  placeInRating: 23,
  terDivisionName: "ДВБ",
};

const БобокАлександр = {
  employeeNumber: "12",
  lastName: "Бобок",
  firstName: "Александр",
  photoData: фотоБобокАлександр,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "7",
  reward: undefined,
  terDivisionName: "МБ",
  placeInRating: 22,
};

const ПроскуринаЕлена = {
  employeeNumber: "2",
  lastName: "Проскурина",
  firstName: "Елена",
  photoData: фотоПроскуринаЕлена,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "7",
  reward: undefined,
  terDivisionName: "ББ",
  placeInRating: 21,
};

const СорокинаМарина = {
  employeeNumber: "17",
  lastName: "Сорокина",
  firstName: "Марина",
  photoData: "",
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "8",
  reward: undefined,
  placeInRating: 20,
  terDivisionName: "СЗБ",
};
const ТомсонЕкатерина = {
  employeeNumber: "21",
  lastName: "Томсон",
  firstName: "Екатерина",
  photoData: фотоТомсонЕкатерина,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "9",
  reward: undefined,
  terDivisionName: "СИБ",
  placeInRating: 19,
};

const ДуроваНаталья = {
  employeeNumber: "28",
  lastName: "Дурова",
  firstName: "Наталья",
  photoData: фотоДуроваНаталья,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "13",
  reward: undefined,
  terDivisionName: "ЦЧБ",
  placeInRating: 18,
};

const МитренкоАндрей = {
  employeeNumber: "7",
  lastName: "Митренко",
  firstName: "Андрей",
  photoData: фотоМитренкоАндрей,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "14",
  reward: undefined,
  terDivisionName: "ДВБ",
  placeInRating: 17,
};

const ХасаншинаВенера = {
  employeeNumber: "5",
  lastName: "Хасаншина",
  firstName: "Венера",
  photoData: фотоХасаншинаВенера,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "14",
  reward: undefined,
  placeInRating: 16,
  terDivisionName: "ВВБ",
};

const ШебановаОльга = {
  employeeNumber: "31",
  lastName: "Шебанова",
  firstName: "Ольга",
  photoData: фотоШебановаОльга,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "17",
  reward: undefined,
  placeInRating: 15,
  terDivisionName: "ЮЗБ",
};

const ЧернецВиктория = {
  employeeNumber: "33",
  lastName: "Чернец",
  firstName: "Виктория",
  photoData: фотоЧернецВиктория,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "19",
  placeInRating: 14,
  reward: undefined,
  terDivisionName: "ЮЗБ",
};

const ЖаглинаЖанна = {
  employeeNumber: "30",
  lastName: "Жаглина",
  firstName: "Жанна",
  photoData: фотоЖаглинаЖанна,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "19",
  reward: undefined,
  placeInRating: 13,
  terDivisionName: "ЦЧБ",
};

const КунинаТатьяна = {
  employeeNumber: "15",
  lastName: "Кунина",
  firstName: "Татьяна",
  photoData: фотоКунинаТатьяна,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "20",
  placeInRating: 12,
  reward: undefined,
  terDivisionName: "ПБ",
};

const ЧернякРуфина = {
  employeeNumber: "3",
  lastName: "Черняк",
  firstName: "Руфина",
  photoData: "",
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "21",
  reward: undefined,
  placeInRating: 11,
  terDivisionName: "ББ",
};

const СавушкинаЭмма = {
  employeeNumber: "18",
  lastName: "Савушкина",
  firstName: "Эмма",
  photoData: фотоСавушкинаЭмма,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "22",
  reward: undefined,
  placeInRating: 10,
  terDivisionName: "СЗБ",
};

const БорбликМихаил = {
  employeeNumber: "32",
  lastName: "Борблик",
  firstName: "Михаил",
  photoData: фотоБорбликМихаил,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "23",
  reward: undefined,
  placeInRating: 9,
  terDivisionName: "ЮЗБ",
};

const ОрловаЮлия = {
  employeeNumber: "14",
  lastName: "Орлова",
  firstName: "Юлия",
  photoData: фотоОрловаЮлия,
  colorCode: colorCodeMaster,
  isMarked: false,
  indicatorValue: "23",
  reward: undefined,
  placeInRating: 8,
  terDivisionName: "ПБ",
};

const СенотрусоваЮлия = {
  employeeNumber: "9",
  lastName: "Сенотрусова",
  firstName: "Юлия",
  photoData: фотоСенотрусоваЮлия,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "24",
  reward: undefined,
  placeInRating: 7,
  terDivisionName: "ДВБ",
};

const МакаровПавел = {
  employeeNumber: "1",
  lastName: "Макаров",
  firstName: "Павел",
  photoData: фотоМакаровПавел,
  colorCode: colorCodeExpert,
  isMarked: false,
  indicatorValue: "24",
  reward: undefined,
  placeInRating: 6,
  terDivisionName: "ББ",
};

const ТихомироваМария = {
  employeeNumber: "23",
  lastName: "Тихомирова",
  firstName: "Мария",
  photoData: фотоТихомироваМария,
  colorCode: colorCodeSpecialist,
  isMarked: false,
  indicatorValue: "26",
  reward: undefined,
  placeInRating: 5,
  terDivisionName: "СРБ",
};

const КузьменкоИгорь = {
  employeeNumber: "22",
  lastName: "Кузьменко",
  firstName: "Игорь",
  photoData: фотоКузьменкоИгорь,
  colorCode: colorCodeMaster,
  isMarked: true,
  indicatorValue: "27",
  placeInRating: 4,
  reward: undefined,
  terDivisionName: "СРБ",
};

const ШаброваИрина = {
  employeeNumber: "24",
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
  terDivisionName: "СРБ",
};

const КатаеваВероника = {
  employeeNumber: "4",
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
  terDivisionName: "ВВБ",
};

const СеркбаеваАлтын = {
  employeeNumber: "25",
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
  terDivisionName: "УБ",
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
  КузьменкоИгорь,
  ШаброваИрина,
  КатаеваВероника,
  СеркбаеваАлтын,
];
