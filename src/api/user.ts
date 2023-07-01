import request from '@/utils/request'
import type { AxiosResponse } from 'axios'

export function login(data: any): Promise<AxiosResponse> {
    return request.post('/sys/login', data)
}