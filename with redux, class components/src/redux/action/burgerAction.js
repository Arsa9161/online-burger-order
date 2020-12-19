export const addIngredients = ortsNer => {
    return {
        type : "ADD_INGREDIENT",
        ortsNer
    }
}

export const removeIngredients = ortsNer => {
    return {
        type : "REMOVE_INGREDIENT",
        ortsNer
    }
}