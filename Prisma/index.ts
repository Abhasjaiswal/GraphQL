import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();
app.use(express.json());


app.get("/users", async(_,res)=>{

    // find functions 
    // findFirst is used to get the first user from the database
    // findMany is used to get all users from the database
    // findUnique is used to get a single user from the database
    // findFirstOrThrow is used to get the first user from the database and throw an error if no user is found
    // findManyOrThrow is used to get all users from the database and throw an error if no users are found
    // findUniqueOrThrow is used to get a single user from the database and throw an error if no user is found
    // findFirstOrThrow is used to get the first user from the database and throw an error if no user is found

    const users = await prisma.user.findMany({
        // where:{
        //     isAdmin: false, age: {
        //         gte: 20,
        //         lte: 25,
        //     }
        // }
        // where:{
        //     AND: [   // you can use AND, OR, NOT, etc.
        //         {nationality: "Indian"},{name: "Abhas Jaiswal"} 
        //     ]
        // }
        where:{
            nationality:{
                in: ["Indian", "American"]
            }
        }
    })  

    res.json(users);
})

app.put("/users", async(_,res)=>{
    // const updatedUser = await prisma.user.update({
    //     where: {email: "abhas.jaiswal0907@gmail.com"},
    //     data:{
    //         age: 22,
    //         isAdmin: true,
    //         email: "abhas@gmail.com"
    //     }
    // })

    const deletedUser = await prisma.user.delete({
        where: {email: "abhas@gmail.com"}
    })
    res.json(deletedUser);
})






app.listen(3000, () => {
    console.log("Server is running on port 3000");
});