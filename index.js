const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.post("/", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.json(newUser);
});

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const age = req.body.age;
  const updateUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: { age: age },
  });
  res.json(updateUser);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedUser);
});

app.post("/house", async (req, res) => {
  const newHouse = await prisma.house.create({ data: req.body });
  res.json(newHouse);
});

app.get("/house", async (req, res) => {
  const allHouse = await prisma.house.findMany({
    include: {
      owner: true,
      buildBy: true,
    },
  });
  res.json(allHouse);
});

app.get("/house/:id", async (req, res) => {
    const id = parseInt(req.params.id)
  const allHouse = await prisma.house.findUnique({
    where: {
        id: id
    },
    include: {
      owner: true,
      buildBy: true,
    },
  });
  res.json(allHouse);
});

app.post("/house/many", async (req, res) => {
    const newHouses = await prisma.house.createMany({data: req.body})
    res.json(newHouses)
})

app.get("/house/with/filters", async (req, res) => {
    const filterHouse = await prisma.house.findMany({
        where: {
            wifiPassword: {
                not: null
            },
            owner: {
                age: {
                    gte: 26
                }
            }
        },
        orderBy: [
            {
                owner: {
                    firstName: "desc"
                }
            }
        ],
        include: {
            owner: true,
            buildBy: true
        }
    })
    res.json(filterHouse)
})

app.listen(3000, () => {
  console.log(`server running on http://localhost:3000`);
});
