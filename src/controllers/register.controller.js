import httpStatus from "http-status";

async function RegisterUser(req, res) {
    try {
        res.sendStatus(httpStatus.ACCEPTED);
    } catch (error) {
        res.sendStatus(httpStatus.NOT_FOUND);
    }
}

export { RegisterUser };