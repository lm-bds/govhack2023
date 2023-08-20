// services/ClusterServices

import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

const ClusterService = {
  getImageByCluster: (cluster) => {
    const url = `${BASE_URL}area/?cluster=${cluster}`;
    return axios.get(url);
  },
};

export default ClusterService;



