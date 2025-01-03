import { axiosInstance } from '@/lib/axios-instance';
import { ApiResponse, ErrorResponse } from '@/types/api.types';

export class ApiClient<T> {
    private baseEndpoint: string;
  
    constructor(baseEndpoint: string) {
      this.baseEndpoint = baseEndpoint;
      console.log('ApiClient iniciado para endpoint base:', baseEndpoint);
    }
  
    async getAll(): Promise<ApiResponse<T[]>> {
      const endpoint = `${this.baseEndpoint}/get-all`; // Ruta para GET todos
      console.log('ApiClient: Iniciando getAll() en', endpoint);
      
      try {
        const response = await axiosInstance.get<ApiResponse<T[]>>(endpoint);
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
    async getAllWithParams(params:string): Promise<ApiResponse<T[]>> {
      const endpoint = `${this.baseEndpoint}/get-all`; // Ruta para GET todos
      console.log('ApiClient: Iniciando getAllWithParams() en', endpoint);
  
      try {
        const response = await axiosInstance.get<ApiResponse<T[]>>(endpoint )
          
         // {         params,  // Aquí pasamos cualquier parámetro adicional como `schedule`        });
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
    async getWithOutParams(): Promise<ApiResponse<T[]>> {
      const endpoint = `${this.baseEndpoint}`; // Ruta para GET todos
      console.log('ApiClient: Iniciando getWithOutParams() en', endpoint);
      
      try {
        const response = await axiosInstance.get<ApiResponse<T[]>>(endpoint);
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
  
    async getById(id: string | number): Promise<ApiResponse<T>> {
      const endpoint = `${this.baseEndpoint}/${id}`; // Ruta específica para GET por ID
      console.log('ApiClient: Iniciando getById() en', endpoint);
  
      try {
        const response = await axiosInstance.get<ApiResponse<T>>(endpoint);
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
  
    async create(data: Partial<T>): Promise<ApiResponse<T>> {
        const endpoint = `${this.baseEndpoint}/create`; // Ruta específica para POST creación
        console.log('ApiClient: Iniciando create() en', endpoint);
      
        try {
          console.log('ApiClient: Iniciando data en create() en', data);
          const response = await axiosInstance.post<ApiResponse<T>>(endpoint, data);
          return response.data;
        } catch (error: any) {
          console.log('create()ERROR: ', error);
          this.handleError(error);
          throw error;
        }
    }
  
    async update(id: string | number, data: Partial<T>): Promise<ApiResponse<T>> {
      const endpoint = `${this.baseEndpoint}/update/${id}`; // Ruta específica para PUT actualización
      console.log('ApiClient: Iniciando update() en', endpoint);
  
      try {
        const response = await axiosInstance.patch<ApiResponse<T>>(endpoint, data);
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
  
    async delete(id: string | number): Promise<ApiResponse<void>> {
      const endpoint = `${this.baseEndpoint}/delete/${id}`; // Ruta específica para DELETE
      console.log('ApiClient: Iniciando delete() en', endpoint);
  
      try {
        const response = await axiosInstance.delete<ApiResponse<void>>(endpoint);
        return response.data;
      } catch (error: any) {
        this.handleError(error);
        throw error;
      }
    }
  
    private handleError(error: any): never {
      const errorResponse: ErrorResponse = error.response?.data || {
        detail: 'An unexpected error occurred',
        status: 500,
      };
      throw new Error(errorResponse.detail);
    }
  }
  