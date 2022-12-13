import React from 'react'

export interface IInitialState {
  id: number;
  name: string;
  description: string;
  price: number;
  inStock: boolean;
}

export interface IProduct extends IInitialState {
  isLoading: boolean;
}

export interface IProductOptionalValue {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  inStock?: boolean;
}

export interface IChildren {
  children: React.ReactNode
}

export interface IForm {
  isEdit?: boolean;
  productId?: number;
}
