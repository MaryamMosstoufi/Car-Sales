export const UPDATE_Features = "UPDATE_Features";
export const addFeatures = addFeature => {
  return { type: UPDATE_Features, payload: addFeature };
};
export const removeFeatures = removeFeature => {
  return { type: UPDATE_Features, payload: removeFeature };
};
