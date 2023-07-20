import БерстеневаАлена from "../assets/images/Берстенева Алена Викторовна.jpeg";
import ДуроваНаталья from "../assets/images/Дурова Наталья Юрьевна.jpeg";
import КузьменкоИгорь from "../assets/images/Кузьменко Игорь Владимирович1.jpeg";
import ОрловаЮлия from "../assets/images/Орлова Юлия Валериевна.jpeg";
import ТихомироваМария from "../assets/images/Тихомирова Мария Алексеевна.jpeg";
import ШаброваИрина from "../assets/images/Шаброва Ирина Сергеевна.jpeg";
import { profileTopManager } from "./profile";
import { INewsList } from "../interfaces";
import { leaders } from "./tournamen-leaders";

export const news: INewsList = {
  timePeriod: [
    {
      name: "Сегодня",

      news: [
        {
          newsId: "news1",
          date: "27.07.26",
          tournamentId: "",
          newsText: `Игровые механики и соревновательность сотрудников позволила Сберу зарабатать 10 млрд дополнительного дохода в год.

          Компания отчиталась о доходах и зафиксировала подтвержденный эффект от внедрения игровых механик в бизнес-процесс.
          
          Проект «Герои продаж» стартовал в банке в 2023 году и сегодня его руководитель Сергей Меламед рассказал Коммерсанту, как использование геймификации помогло значительно увеличить перфоманс команды.

          Все сотрудники клиентской службы Сбера, работающие с крупным, крупнейшим и средним бизнесом, стали героями особой метавселенной. В её архитектуре целая плеяда заданий и турниров разного уровня сложности. За бизнес-достижения участники получают виртуальные NFT-награды и кристаллы, прокачивая тем самым личный профиль. Система заданий ранжируется индивидуально с помощью AI-моделей, учитывая отраслевую специфику и индивидуальные особенностей каждого сотрудника. А механики социальной сети позволяют талантливым менеджерам выделяться и заявлять о себе на всю страну.
          
          Проект позволил значительно повысить мотивацию сотрудников и сместить акцент на ее нематериальную часть. Заработанные кристаллы менеджеры тратят во внутреннем маркеплейсе, приобретая, например, день отдыха или утренний звонок от большого руководителя, который желал хорошего дня или поздравлял с днём рождения.
          
          «Работать играючи — кто откажется от такого? — говорят сотрудники Сбера — Мы получаем большой заряд на новые достижения не только от личных побед, но и от командных. А осознание того, что это драйвит весь бизнес, умножает этот заряд».
          
          В конечном счете, геймификация помогает создать более мотивированную, эффективную и дружественную рабочую среду. Она не только позволяет достичь лучших результатов компании, но и повышает уровень обученности и вовлечения в общий результат.
          
          «Компании будущего должны осознавать потенциал геймификации и внедрять ее в свои процессы. Тем более, что новое поколение сотрудников может даже испытывать определенные сложности без вовлечения в игру. Геймификация — это ключ к созданию Dream Team.
          
          Нам удалось создать продукт на пересечении бизнеса, искусства и технологий. И по сути изменить бизнес модель — перейти от классического планирования к более результативной модели, основанной на соревновательности. Сегодня Сбер возглавляет этот тренд», – рассказал директор департамента развития корпоративного бизнеса Сергей Меламед.`,
          leaders: [profileTopManager],
        },
      ],
    },
    {
      name: "Три недели назад",
      news: [
        {
          newsId: "news2",
          date: "06.07.23",
          tournamentId: "T3",
          newsText:
            "Новое достижение! Игорь и еще 32 участника заработали для банка по 3 млн. руб. от сделок с индийскими компаниями. Поздравляем ребят с крутым достижением! Дополнительно каждому выпущена награда в формате ",
          leaders,
        },
      ],
    },
  ],
};

export const newsRatingCountry = {
  heading: "Игорь Кузьменко из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 33 месте",
  leaders: [
    {
      employeeNumber: "22",
      firstName: "Игорь",
      lastName: "Кузьменко",
      photoData: КузьменкоИгорь,
      terDivisionName: "СРБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      employeeNumber: "19",
      isMarked: false,
      firstName: "Алёна",
      lastName: "Берстенева",
      photoData: БерстеневаАлена,
      terDivisionName: "СИБ",
      placeInRating: 2,
      crystalsEarned: 119,
      indicatorValue: "",
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      employeeNumber: "3",
      isMarked: false,
      firstName: "Руфина",
      lastName: "Черняк",
      photoData: "",
      terDivisionName: "ББ",
      placeInRating: 3,
      crystalsEarned: 115,
      indicatorValue: "",
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      employeeNumber: "28",
      isMarked: false,
      firstName: "Наталья",
      lastName: "Дурова",
      photoData: ДуроваНаталья,
      terDivisionName: "ЦЧБ",
      placeInRating: 4,
      crystalsEarned: 114,
      indicatorValue: "",
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      employeeNumber: "14",
      isMarked: false,
      firstName: "Юлия",
      lastName: "Орлова",
      photoData: ОрловаЮлия,
      terDivisionName: "ПБ",
      placeInRating: 5,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
  ],
};
export const newsRatingTERB = {
  heading: "Игорь Кузьменко из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 3 месте",
  leaders: [
    {
      employeeNumber: "22",
      firstName: "Игорь",
      lastName: "Кузьменко",
      photoData: КузьменкоИгорь,
      terDivisionName: "СРБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      employeeNumber: "24",
      isMarked: false,
      firstName: "Ирина",
      lastName: "Шаброва",
      photoData: ШаброваИрина,
      terDivisionName: "СИБ",
      placeInRating: 2,
      colorCode: {
        primary: "orange-60",
        secondary: "orange-30",
      },
    },
    {
      employeeNumber: "23",
      isMarked: false,
      firstName: "Мария",
      lastName: "Тихомирова",
      photoData: ТихомироваМария,
      terDivisionName: "СРБ",
      placeInRating: 3,
      colorCode: {
        primary: "light-green-30",
        secondary: "light-green-20",
      },
    },
  ],
};

export const newsRatingGOSB = {
  heading: "Игорь Кузьменко из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 1 месте",
  leaders: [
    {
      employeeNumber: "22",
      firstName: "Игорь",
      lastName: "Кузьменко",
      photoData: КузьменкоИгорь,
      terDivisionName: "СРБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
  ],
};

export const newsRating = {
  heading: "Анна Петровская из СБ на 1 месте!",
  usersPosition: "Вы на 12 из 1240 месте",
  leaders: [
    {
      employeeNumber: "010122",
      firstName: "Илья",
      lastName: "Герасимчук",
      photoData: "URL_in_Base64",
      terDivisionName: "ЦБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
  ],
};
