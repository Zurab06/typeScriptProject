import React, { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProduct } from '../models'
export function useProducts() {

    const [products, setProduct] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const addProduct=(product:IProduct)=>{
setProduct(prev=> [...prev,product])
    }


    async function fetchProducts() {

        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
            setProduct(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }


    }

    useEffect(() => {
        fetchProducts()
    

    }, [])
    return { products, loading, error, addProduct }
}