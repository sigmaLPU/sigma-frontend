export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false
};
  return new Date(dateString).toLocaleDateString(undefined, options);
};


export const findUser = async (id) => {
    
}