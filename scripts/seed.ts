const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

async function main() {
    try{
        await database.category.createMany({
            data: [
                { name : "Python" },
                { name : "React" },
                { name : "Java" },
                { name : "Data Science" },
                { name : "Machine Learning" },
                { name : "Artificial Intelligence" },
                { name : "Other" },
            ]
        });

        console.log("Categories created successfully");

    } catch (error) {
        console.error(error);
    } finally {
        await database.$disconnect();
    }
}

main();