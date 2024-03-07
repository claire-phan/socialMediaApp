import {
    useQuery, //cache data 
    useMutation, //modify data
    useQueryClient,
    useInfiniteQuery,
} from '@tanstack/react-query'
import { createUserAccount, signInAccount } from '../appwrite/api'
import { INewUser } from '@/types'

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { 
            email: string; 
            password: string;
        }) => signInAccount(user),
    })
}