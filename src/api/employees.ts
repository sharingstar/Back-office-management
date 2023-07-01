// 封装和员工有关的接口
import request from '@/utils/request'
import type { AxiosResponse } from 'axios'

// 获取员工列表
export function getEmployeesList(params: any): Promise<AxiosResponse> {
    return request.get('/sys/user', { params })
}

// 删除员工
export function deleteEmployee(id: number): Promise<AxiosResponse> {
    return request.delete(`/sys/user/${id}`)
}