import prisma from "../src/database";

async function createOrUpdate() {}

async function main() {
	return await prisma.customer.upsert({
		create: {
			firstName: "Geraldo",
			lastName: "Luiz Datena",
			document: "133.245.497-60",
		},
		update: {},
		where: { document: "133.245.497-60" },
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.log(e);
		await prisma.$disconnect();
		process.exit(1);
	});
