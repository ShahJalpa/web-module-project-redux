export const REMOVE_ITEM_FEATURE = "REMOVE_ITEM_FEATURE";
export const removeFeature = (feature) => {
    return({
        type: REMOVE_ITEM_FEATURE,
        payload: feature
    })
}