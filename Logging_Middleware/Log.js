
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const token = process.env.AUTH_TOKEN


async function Log({stack, level, packageName, message}) {
    const logData = {
        stack,
        level,
        packageName,
        message
    };
    try {
        await axios.post(
            'http://20.244.56.144/evaluation-service/logs',
            logData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return { success: true };
    } catch (error) {
        // Return error details for server.js to handle
        return { success: false, error: error?.response?.data || error.message || error };
    }
}
export default Log;

