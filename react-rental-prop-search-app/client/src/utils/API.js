import axios from 'axios';

    function getProps() {
        return axios.get('/api/properties');
    }

    function deleteProp(id) {
        return axios.delete('/api/properties/' + id);
    }

    export {getProps, deleteProp};
