import axios from 'axios';

const API_BASE_URL = 'http://10.126.192.122:8100/';

// Set up a default axios instance
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const ApiService = {

    getCortexSearchDetails: async () => {
        try {
            const response = await axiosInstance.get('/api/cortex/get_cortex_search_details/');
            return response.data;
        } catch (error) {
            console.error("Error fetching cortex search details:", error);
            throw error;
        }
    },

    getCortexAnalystDetails: async () => {
        try {
            const response = await axiosInstance.get('/api/cortex/get_cortex_analyst_details/');
            return response.data;
        } catch (error) {
            console.error('Error fetching cortex analyst details:', error);
            throw error;
        }
    },

};

export default ApiService;
