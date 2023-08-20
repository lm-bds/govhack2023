import React from 'react';

function ClusterExtraInfo({ selectedCluster }) {
  // You can define the extra information for each cluster here
  const clusterInfo = {
    '1': 'Cluster 1: Extra info for Cluster 1',
    '2': 'Cluster 2: Extra info for Cluster 2',
    // Define information for other clusters as needed
  };
  console.log('selectedCluster in extraInfo: ', selectedCluster);
  return <p>{clusterInfo[selectedCluster]}</p>;
}

export default ClusterExtraInfo;

