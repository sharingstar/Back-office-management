// 封装axios接口
import axios from "axios";
import type { AxiosRequestConfig,  AxiosResponse } from "axios";
import type { InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from "element-plus";
import {useUserStore} from '@/stores//user'

// 配置axios实例
const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = useUserStore().token;
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }
    return config as InternalAxiosRequestConfig;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(async (response: AxiosResponse) => {
    const { success, message, data } = response.data;
    if (!success) {
        await ElMessage.error(message);
        return Promise.reject(new Error(message));
    }
    return data;
}, (error) => {
    const { message } = error;
    ElMessage.error(message);
    return Promise.reject(error);
});

export default instance;
