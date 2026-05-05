class FrutasService {
    async getAll() {
        try {
            const query = "SELECT * FROM "
            const res = await Pool.query(query)
            console.log(res.rows)
        } catch (error){

        }
    }
}

export const FrutasService = new FrutasService() 