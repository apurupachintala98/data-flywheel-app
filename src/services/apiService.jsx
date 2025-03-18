import axios from 'axios';

const BASE_URL = "http://10.126.192.122:8100/";

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getCortexSearchDetails = async () => {
    try {
        const response = await apiService.get('/api/cortex/get_cortex_search_details/');
        return response.data;
    } catch (error) {
        console.error("Error fetching cortex search details:", error);
        throw error;
    }
};

export const getCortexAnalystDetails = async () => {
    try {
        const response = await apiService.get('/api/cortex/get_cortex_analyst_details/');
        return response.data;
    } catch (error) {
        console.error("Error fetching cortex analyst details:", error);
        throw error;
    }
};


export default apiService;
