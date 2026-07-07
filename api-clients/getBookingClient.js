
class GetApiBooking{
    constructor(request){
        this.request = request
    }
    async getBookingApi(){
        const response = await this.request.get('/booking');
        return response;
    }

    async getBookingById(id){
        const response = await this.request.get(`/booking/${id}`);
        return response;
    }

    async getBookingsByQueryParam(firstName, lastName){
        const response = await this.request.get('/booking', {
            params: {
                'firstname': firstName,
                'lastname': lastName
            }
            
        });
        return response;
    }
}

module.exports = {GetApiBooking};