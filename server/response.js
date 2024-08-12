import { STATUS_CODES } from "http"

const response = (statusCode, data, message, res) => {
    res.status(statusCode).json({
        status: STATUS_CODES[statusCode],
        code: statusCode,
        payload: data,
        message: message,
        pagination: {
            prev: "",
            next: "",
            max: ""
        }
    })
}
export default response

