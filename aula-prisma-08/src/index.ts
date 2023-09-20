import prisma from "./database";

async function classCount() {
	const studentsbyClass = await prisma.student.groupBy({
		by: ["class"],
		_count: { id: true },
		orderBy: { _count: { id: "desc" } },
	}); // TODO: Faça a implementação aqui
	console.log(studentsbyClass);
}


async function classCountWithoutJob() {
	const studentsbyClass = await prisma.student.groupBy({
		by: ["class"],
    where: {jobId: null},
		_count: { id: true },
		orderBy: { _count: { id: "desc" } },
	}); // TODO: Faça a implementação aqui
	console.log(studentsbyClass);
}

classCountWithoutJob();