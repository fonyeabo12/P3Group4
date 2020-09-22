import axios from 'axios';



    function save(data) {
        return axios.post('/properties/save', data);
    }

    export {save};
