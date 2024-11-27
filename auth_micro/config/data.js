import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["error", "query"], // Logs for error and query
});

export default prisma;
