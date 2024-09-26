export const ADD_ITEM_FEATURE = "ADD_ITEM_FEATURE";

export const addFeature = (feature, price) => {
    return ({
        type: "ADD_ITEM_FEATURE",
        payload: {feature: feature, price: price}
    })
}
