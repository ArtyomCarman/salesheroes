import БерстеневаАлена from "../assets/images/Берстенева Алена Викторовна.jpeg";
import ДуроваНаталья from "../assets/images/Дурова Наталья Юрьевна.jpeg";
import ГайнРоман from "../assets/images/romanGayn.png";
import ОрловаЮлия from "../assets/images/Орлова Юлия Валериевна.jpeg";
import ТихомироваМария from "../assets/images/Тихомирова Мария Алексеевна.jpeg";
import ШаброваИрина from "../assets/images/Шаброва Ирина Сергеевна.jpeg";
import Меламед from "../assets/images/Сергей Меламед.jpeg";
import ЧернышоваЕлена from "../assets/images/Елена Чернышова.jpeg";
import Юлианна from "../assets/images/Юлианна Егорова.jpeg";
import ШебановаОльга from "../assets/images/Шебанова Ольга Евгеньевна.jpeg";
import СеркбаеваАлтын from "../assets/images/Серкбаева Алтын Суннатовна.jpeg";

import { profileTopManager } from "./profile";
import { EmployeeStatus, INewsLeader, INewsList } from "../interfaces";
import { leaders } from "./tournamen-leaders";

const formatter = new Intl.DateTimeFormat("ru");

function getPreviousDay(days: number) {
  const today = new Date();
  const previous = new Date(today.getTime());
  previous.setDate(today.getDate() - days);

  return formatter.format(previous);
}

export const news: INewsList = {
  timePeriod: [
    {
      name: "Сегодня",
      news: [
        {
          newsId: "news1",
          date: getPreviousDay(0),
          tournamentId: "",
          newsText: `
          <h3>Игровые механики и соревновательность сотрудников позволила Сберу зарабатать 10 млрд дополнительного дохода в год</h3>
          <p>Компания отчиталась о доходах и зафиксировала подтвержденный эффект от внедрения игровых механик в бизнес-процесс.</p>
          <p>Проект «Герои продаж» стартовал в банке в 2023 году и сегодня его руководитель Сергей Меламед рассказал Коммерсанту, как использование геймификации помогло значительно увеличить перфоманс команды.</p>
          <p>Все сотрудники клиентской службы Сбера, работающие с крупным, крупнейшим и средним бизнесом, стали героями особой метавселенной. В её архитектуре целая плеяда заданий и турниров разного уровня сложности. За бизнес-достижения участники получают виртуальные NFT-награды и кристаллы, прокачивая тем самым личный профиль. Система заданий ранжируется индивидуально с помощью AI-моделей, учитывая отраслевую специфику и индивидуальные особенностей каждого сотрудника. А механики социальной сети позволяют талантливым менеджерам выделяться и заявлять о себе на всю страну.</p>
          <p>Проект позволил значительно повысить мотивацию сотрудников и сместить акцент на ее нематериальную часть. Заработанные кристаллы менеджеры тратят во внутреннем маркеплейсе, приобретая, например, день отдыха или утренний звонок от большого руководителя, который желал хорошего дня или поздравлял с днём рождения.</p>
          <p>«Работать играючи — кто откажется от такого? — говорят сотрудники Сбера — Мы получаем большой заряд на новые достижения не только от личных побед, но и от командных. А осознание того, что это драйвит весь бизнес, умножает этот заряд».</p>
          <p>В конечном счете, геймификация помогает создать более мотивированную, эффективную и дружественную рабочую среду. Она не только позволяет достичь лучших результатов компании, но и повышает уровень обученности и вовлечения в общий результат.</p>
          <p>«Компании будущего должны осознавать потенциал геймификации и внедрять ее в свои процессы. Тем более, что новое поколение сотрудников может даже испытывать определенные сложности без вовлечения в игру. Геймификация — это ключ к созданию Dream Team.</p>
          <p>Нам удалось создать продукт на пересечении бизнеса, искусства и технологий. И по сути изменить бизнес модель — перейти от классического планирования к более результативной модели, основанной на соревновательности. Сегодня Сбер возглавляет этот тренд», – рассказал директор департамента развития корпоративного бизнеса Сергей Меламед.</p>`,
          leaders: [profileTopManager],
          likes: {
            isLiked: true,
            likesAmount: 8,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "44",
                    photoData: Юлианна,
                    terDivisionName: "ЦА",
                    firstName: "Юлианна",
                    lastName: "Егорова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "25",
                    isMarked: false,
                    firstName: "Алтын",
                    lastName: "Серкбаева",
                    photoData: СеркбаеваАлтын,
                    terDivisionName: "УБ",
                    colorCode: {
                      primary: "blue-60",
                      secondary: "blue-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "31",
                    isMarked: false,
                    firstName: "Ольга",
                    lastName: "Шебанова",
                    photoData: ШебановаОльга,
                    terDivisionName: "ЮЗБ",
                    colorCode: {
                      primary: "light-green-30",
                      secondary: "light-green-20",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "Вчера",
      news: [
        {
          newsId: "news2",
          date: `${getPreviousDay(1)}`,
          tournamentId: "T3",
          newsText:
            "<h3>30 менеджеров получили награду. Их КПК вошли в Лигу чемпионов ⁣по итогам 1 полугодия 2023. Новых побед и успехов!</h3>",
          leaders: leaders.slice(0, 31),
          likes: {
            isLiked: true,
            likesAmount: 6,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "31",
                    isMarked: false,
                    firstName: "Ольга",
                    lastName: "Шебанова",
                    photoData: ШебановаОльга,
                    terDivisionName: "ЮЗБ",
                    colorCode: {
                      primary: "light-green-30",
                      secondary: "light-green-20",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
        {
          newsId: "news3",
          date: `${getPreviousDay(1)}`,
          tournamentId: "T3",
          newsText:
            "<h3>Ирина Шаброва и еще 32 участника стали победителями турнира “Марафон по условным сделкам”. Они показали лучший результат в стране</h3>",
          leaders: leaders.slice(0, 31),
          likes: {
            isLiked: true,
            likesAmount: 6,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "31",
                    isMarked: false,
                    firstName: "Ольга",
                    lastName: "Шебанова",
                    photoData: ШебановаОльга,
                    terDivisionName: "ЮЗБ",
                    colorCode: {
                      primary: "light-green-30",
                      secondary: "light-green-20",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "На прошлой неделе",
      news: [
        {
          newsId: "news4",
          date: getPreviousDay(7),
          tournamentId: "T3",
          newsText:
            "<h3>Новое достижение! Роман и еще 32 участника заработали для банка по 3 млн руб. от сделок с индийскими компаниями. Поздравляем ребят с крутым достижением! Дополнительно каждому выпущена награда в формате <a style='border-bottom: 1px dashed #fff' href='https://dfa.sber.ru/nft/tokens/view/2cDe52F4H3ixbxXeknmDWiEkopFNYV6WQ8oT1aTPutDAjWNJQGVxw8mKsiifqMALhF28vUqFHkxSHoejuiAHZd6iLef8D6u' target='_blank'>NFT на платформе ЦФА Сбера.</a></h3>",
          leaders,
          likes: {
            isLiked: true,
            likesAmount: 7,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "44",
                    photoData: Юлианна,
                    terDivisionName: "ЦА",
                    firstName: "Юлианна",
                    lastName: "Егорова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "25",
                    isMarked: false,
                    firstName: "Алтын",
                    lastName: "Серкбаева",
                    photoData: СеркбаеваАлтын,
                    terDivisionName: "УБ",
                    colorCode: {
                      primary: "blue-60",
                      secondary: "blue-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
        {
          newsId: "news5",
          date: getPreviousDay(10),
          tournamentId: "",
          newsText:
            "<h3>Екатерина сделал в прошедшем месяце тройную сумму комиссии по сделкам с индийскими компаниями, чем месяцем ранее. Взята высокая планка!</h3>",
          leaders: [
            leaders.find(
              ({ profileNumber }) => profileNumber === "21",
            ) as INewsLeader,
          ],
          likes: {
            isLiked: true,
            likesAmount: 7,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "44",
                    photoData: Юлианна,
                    terDivisionName: "ЦА",
                    firstName: "Юлианна",
                    lastName: "Егорова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "25",
                    isMarked: false,
                    firstName: "Алтын",
                    lastName: "Серкбаева",
                    photoData: СеркбаеваАлтын,
                    terDivisionName: "УБ",
                    colorCode: {
                      primary: "blue-60",
                      secondary: "blue-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "Более ранние",
      news: [
        {
          newsId: "news6",
          date: "10.04.23",
          tournamentId: "",
          newsText:
            "<h3>Ирина смогла удвоить заработанную комиссию по сделкам с индийскими контрагентами по сравнению с предыдущим месяцем. Так держать!</h3>",
          leaders: [
            leaders.find(
              ({ profileNumber }) => profileNumber === "24",
            ) as INewsLeader,
          ],
          likes: {
            isLiked: true,
            likesAmount: 8,
            bossNames: [
              "Попов А.Л",
              "Ситнов В.В.",
              "Меламед С.В.",
              "Чернышова Е.В.",
              "Егорова Ю.И.",
            ],
            people: [
              {
                position: "1",
                list: [
                  {
                    profileNumber: "40",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Анатолий",
                    lastName: "Попов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "41",
                    photoData: "",
                    terDivisionName: "ЦА",
                    firstName: "Владимир",
                    lastName: "Ситнов",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "42",
                    photoData: Меламед,
                    terDivisionName: "ЦА",
                    firstName: "Сергей",
                    lastName: "Меламед",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "43",
                    photoData: ЧернышоваЕлена,
                    terDivisionName: "ЦА",
                    firstName: "Елена",
                    lastName: "Чернышова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "44",
                    photoData: Юлианна,
                    terDivisionName: "ЦА",
                    firstName: "Юлианна",
                    lastName: "Егорова",
                    colorCode: {
                      primary: "gradient",
                      secondary: "gradient",
                    },
                    employeeStatus: EmployeeStatus.Top_Manager,
                  },
                  {
                    profileNumber: "25",
                    isMarked: false,
                    firstName: "Алтын",
                    lastName: "Серкбаева",
                    photoData: СеркбаеваАлтын,
                    terDivisionName: "УБ",
                    colorCode: {
                      primary: "blue-60",
                      secondary: "blue-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "11",
                    isMarked: false,
                    firstName: "Ярослав",
                    lastName: "Митосев",
                    photoData: "",
                    terDivisionName: "МБ",
                    colorCode: {
                      primary: "orange-60",
                      secondary: "orange-30",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                  {
                    profileNumber: "31",
                    isMarked: false,
                    firstName: "Ольга",
                    lastName: "Шебанова",
                    photoData: ШебановаОльга,
                    terDivisionName: "ЮЗБ",
                    colorCode: {
                      primary: "light-green-30",
                      secondary: "light-green-20",
                    },
                    employeeStatus: EmployeeStatus.Contestant,
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export const newsRatingCountry = {
  heading: "Роман Гайн из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 1243 месте",
  leaders: [
    {
      profileNumber: "22",
      firstName: "Роман",
      lastName: "Гайн",
      photoData: ГайнРоман,
      terDivisionName: "СРБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      profileNumber: "19",
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
      profileNumber: "3",
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
      profileNumber: "28",
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
      profileNumber: "14",
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
  heading: "Роман Гайн из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 152 месте",
  leaders: [
    {
      profileNumber: "22",
      firstName: "Роман",
      lastName: "Гайн",
      photoData: ГайнРоман,
      terDivisionName: "СРБ",
      placeInRating: 1,
      colorCode: {
        primary: "blue-60",
        secondary: "blue-30",
      },
    },
    {
      profileNumber: "24",
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
      profileNumber: "23",
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
  heading: "Роман Гайн из СРБ на 1 месте!",
  usersPosition: "Вы на 1 из 15 месте",
  leaders: [
    {
      profileNumber: "22",
      firstName: "Роман",
      lastName: "Гайн",
      photoData: ГайнРоман,
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
      profileNumber: "010122",
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
