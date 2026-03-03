import { Crop } from "./interfaces";

// eslint-disable-next-line prefer-const
let cropState: Crop[] = [
  {
    id: 1,
    name: "Пшеничне поле 1A",
    type: "Пшениця",
    plantingDate: "2025-10-15",
    harvestDate: "2026-03-20",
    area: 50,
    status: "growing",
    yield: 25.5,
  },
  {
    id: 2,
    name: "Рисове поле 1B",
    type: "Рис",
    plantingDate: "2025-11-01",
    harvestDate: "2026-04-10",
    area: 30,
    status: "growing",
    yield: 18.2,
  },
  {
    id: 3,
    name: "Кукурудзяне поле 1C",
    type: "Кукурудза",
    plantingDate: "2025-09-20",
    harvestDate: "2026-01-15",
    area: 40,
    status: "harvested",
    yield: 32.8,
  },
  {
    id: 4,
    name: "Соєве поле 1D",
    type: "Соя",
    plantingDate: "2025-10-05",
    harvestDate: "2026-02-28",
    area: 35,
    status: "growing",
    yield: 15.7,
  },
  {
    id: 5,
    name: "Томатне поле 1E",
    type: "Овочі",
    plantingDate: "2025-12-10",
    harvestDate: "2026-03-05",
    area: 5,
    status: "planted",
    yield: 0,
  },
  {
    id: 6,
    name: "Яблуневий сад",
    type: "Фрукти",
    plantingDate: "2025-03-15",
    harvestDate: "2025-10-30",
    area: 20,
    status: "harvested",
    yield: 42.3,
  },
];

export { cropState };
