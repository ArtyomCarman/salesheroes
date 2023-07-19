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

const colorCodeExpert = {
  primary: "orange-60",
  secondary: "orange-30",
};
const colorCodeMaster = {
  primary: "blue-60",
  secondary: "blue-30",
};

const colorCodeSpecialist = {
  primary: "light-green-30",
  secondary: "light-green-20",
};

const МитосевЯрослав = {
  employeeNumber: Math.random().toString(),
  lastName: "Митосев",
  firstName: "Ярослав",
  photoData: "",
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "1",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  placeInRating: 1,
  terDivisionName: "ЦА",
};

const БерстеневаАлена = {
  employeeNumber: Math.random().toString(),
  lastName: "Берстенева",
  firstName: "Алена",
  photoData: фотоБерстеневаАлена,
  colorCode: colorCodeMaster,
  // others
  isMarked: false,
  indicatorValue: "2",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КротковНиколай = {
  employeeNumber: Math.random().toString(),
  lastName: "Кротков",
  firstName: "Николай",
  photoData: фотоКротковНиколай,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "3",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ДмитриеваВероника = {
  employeeNumber: Math.random().toString(),
  lastName: "Дмитриева",
  firstName: "Вероника",
  photoData: фотоДмитриеваВероника,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const БрусницынаМария = {
  employeeNumber: Math.random().toString(),
  lastName: "Брусницына",
  firstName: "Мария",
  photoData: фотоДмитриеваВероника,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КодоловаЕлена = {
  employeeNumber: Math.random().toString(),
  lastName: "Кодолова",
  firstName: "Елена",
  photoData: фотоКодоловаЕлена,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КирееваЮлия = {
  employeeNumber: Math.random().toString(),
  lastName: "Киреева",
  firstName: "Юлия",
  photoData: фотоКирееваЮлия,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const АдиевРашид = {
  employeeNumber: Math.random().toString(),
  lastName: "Адиев",
  firstName: "Рашид",
  photoData: фотоАдиевРашид,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ЗахаровАлександр = {
  employeeNumber: Math.random().toString(),
  lastName: "Захаров",
  firstName: "Александр",
  photoData: фотоКодоловаЕлена,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КарагодинаМария = {
  employeeNumber: Math.random().toString(),
  lastName: "Карагодина",
  firstName: "Мария",
  photoData: фотоКарагодинаМария,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const СорокинИлья = {
  employeeNumber: Math.random().toString(),
  lastName: "Сорокин",
  firstName: "Илья",
  photoData: фотоСорокинИлья,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const БобокАлександр = {
  employeeNumber: Math.random().toString(),
  lastName: "Бобок",
  firstName: "Александр",
  photoData: фотоБобокАлександр,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ПроскуринаЕлена = {
  employeeNumber: Math.random().toString(),
  lastName: "Проскурина",
  firstName: "Елена",
  photoData: фотоПроскуринаЕлена,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const СорокинаМарина = {
  employeeNumber: Math.random().toString(),
  lastName: "Сорокина",
  firstName: "Марина",
  photoData: "",
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};
const ТомсонЕкатерина = {
  employeeNumber: Math.random().toString(),
  lastName: "Томсон",
  firstName: "Екатерина",
  photoData: фотоТомсонЕкатерина,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ДуроваНаталья = {
  employeeNumber: Math.random().toString(),
  lastName: "Дурова",
  firstName: "Наталья",
  photoData: фотоДуроваНаталья,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const МитренкоАндрей = {
  employeeNumber: Math.random().toString(),
  lastName: "Митренко",
  firstName: "Андрей",
  photoData: фотоМитренкоАндрей,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ХасаншинаВенера = {
  employeeNumber: Math.random().toString(),
  lastName: "Хасаншина",
  firstName: "Венера",
  photoData: фотоХасаншинаВенера,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ШебановаОльга = {
  employeeNumber: Math.random().toString(),
  lastName: "Шебанова",
  firstName: "Ольга",
  photoData: фотоШебановаОльга,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ЧернецВиктория = {
  employeeNumber: Math.random().toString(),
  lastName: "Чернец",
  firstName: "Виктория",
  photoData: фотоЧернецВиктория,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ЖаглинаЖанна = {
  employeeNumber: Math.random().toString(),
  lastName: "Жаглина",
  firstName: "Жанна",
  photoData: фотоЖаглинаЖанна,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КунинаТатьяна = {
  employeeNumber: Math.random().toString(),
  lastName: "Кунина",
  firstName: "Татьяна",
  photoData: фотоКунинаТатьяна,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ЧернякРуфина = {
  employeeNumber: Math.random().toString(),
  lastName: "Черняк",
  firstName: "Руфина",
  photoData: "",
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const СавушкинаЭмма = {
  employeeNumber: Math.random().toString(),
  lastName: "Савушкина",
  firstName: "Эмма",
  photoData: фотоСавушкинаЭмма,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const БорбликМихаил = {
  employeeNumber: Math.random().toString(),
  lastName: "Борблик",
  firstName: "Михаил",
  photoData: фотоБорбликМихаил,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ОрловаЮлия = {
  employeeNumber: Math.random().toString(),
  lastName: "Орлова",
  firstName: "Юлия",
  photoData: фотоОрловаЮлия,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const СенотрусоваЮлия = {
  employeeNumber: Math.random().toString(),
  lastName: "Сенотрусова",
  firstName: "Юлия",
  photoData: фотоСенотрусоваЮлия,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const МакаровПавел = {
  employeeNumber: Math.random().toString(),
  lastName: "Макаров",
  firstName: "Павел",
  photoData: фотоМакаровПавел,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ТихомироваМария = {
  employeeNumber: Math.random().toString(),
  lastName: "Тихомирова",
  firstName: "Мария",
  photoData: фотоТихомироваМария,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КузьменкоИгорь = {
  employeeNumber: Math.random().toString(),
  lastName: "Кузьменко",
  firstName: "Игорь",
  photoData: фотоКузьменкоИгорь,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const ШаброваИрина = {
  employeeNumber: Math.random().toString(),
  lastName: "Шаброва",
  firstName: "Ирина",
  photoData: фотоШаброваИрина,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const КатаеваВероника = {
  employeeNumber: Math.random().toString(),
  lastName: "Катаева",
  firstName: "Вероника",
  photoData: "",
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

const СеркбаеваАлтын = {
  employeeNumber: Math.random().toString(),
  lastName: "Серкбаева",
  firstName: "Алтын",
  photoData: фотоСеркбаеваАлтын,
  colorCode: colorCodeExpert,
  // others
  isMarked: false,
  indicatorValue: "4",
  reward: {
    icon: Reward.silver,
    tooltip: "Победитель турнира",
  },
  //   terDivisionName: "ЦА",
};

export const leaders = [
  МитосевЯрослав,
  // БерстеневаАлена,
  // КротковНиколай,
  // ДмитриеваВероника,
  // БрусницынаМария,
  // КодоловаЕлена,
  // КирееваЮлия,
  // АдиевРашид,
  // ЗахаровАлександр,
  // КарагодинаМария,
  // СорокинИлья,
  // БобокАлександр,
  // ПроскуринаЕлена,
  // СорокинаМарина,
  // ТомсонЕкатерина,
  // ДуроваНаталья,
  // МитренкоАндрей,
  // ХасаншинаВенера,
  // ШебановаОльга,
  // ЧернецВиктория,
  // ЖаглинаЖанна,
  // КунинаТатьяна,
  // ЧернякРуфина,
  // СавушкинаЭмма,
  // БорбликМихаил,
  // ОрловаЮлия,
  // СенотрусоваЮлия,
  // МакаровПавел,
  // ТихомироваМария,
  // КузьменкоИгорь,
  // ШаброваИрина,
  // КатаеваВероника,
  // СеркбаеваАлтын,
];
