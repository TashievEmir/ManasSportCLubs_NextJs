"use client"
export const useLocalStorage  = (key) => {

    const setItem = (value) =>{
        if(window){
            try {
                window.localStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.log(error)
            }
        }
        
    }

    const getItem = () =>{
        if(window){
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : undefined
            } catch (error) {
                console.log(error)
            }
        }
    }

    return {
        setItem,
        getItem
    }
}