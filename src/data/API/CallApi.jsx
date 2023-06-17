const callUserApi = async (url) => {
    
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Erreur de requête');
        }
        const data = await response.json();
        return await data.data

    } catch (error) {
        console.log('Une erreur s\'est produite:', error.message);
    }
};





export default callUserApi;