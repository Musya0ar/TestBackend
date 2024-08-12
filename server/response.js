import { STATUS_CODES } from "http"

const response = (statusCode, data, message, res) => {
    res.status(statusCode).json( {
        payload: {
            STATUS_CODES : statusCode,
            data
            
        },
        message : message,
        pagination : {
            prev: "",
            next: "",
            max: ""
        }
    })
}
export default response