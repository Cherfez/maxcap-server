"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "gyms",
      [
        {
          name: "Rock Steady",
          address: "Zanderijweg 12-14, 1403xv Bussum",
          phone: "0356925000",
          openHrs: 10.0,
          closeHrs: 22.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Klimhal Amsterdam B.V.",
          address: "Naritaweg 48, 1043 BZ Amsterdam",
          phone: "0206810121",
          openHrs: 10.3,
          closeHrs: 23.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mountain Network Amsterdam",
          address: "Erasmusgracht 297, 1061 MD Amsterdam",
          phone: "0881236835",
          openHrs: 11.0,
          closeHrs: 23.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("gyms", null, {});
  },
};
