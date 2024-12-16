import { Categories, CategoriesProps } from "@/components/categories";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])

    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
        } catch (error) {
            console.log(error)
            Alert.alert("categorias", "Não foi possível carregar as categorias.")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <Categories data={categories} />
        </View>
    )
}