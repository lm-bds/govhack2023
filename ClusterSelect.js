import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import ClusterService from '../services/ClusterService';

function ToggleButtonExample({ onImageReceived }) {
  const [ageValue, setAgeValue] = useState('1');
  const [incomeValue, setIncomeValue] = useState('1');
  const [householdSizeValue, setHouseholdSizeValue] = useState('1');
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [imageData, setImageData] = useState(''); // State to store image data

  const ageOptions = [
    { name: 'Low', value: '1' },
    { name: 'Medium', value: '2' },
    { name: 'High', value: '3' },
  ];

  const incomeOptions = [
    { name: 'Low', value: '1' },
    { name: 'Medium', value: '2' },
    { name: 'High', value: '3' },
  ];

  const householdSizeOptions = [
    { name: 'Low', value: '1' },
    { name: 'Medium', value: '2' },
    { name: 'High', value: '3' },
  ];

  const handleSelection = async () => {
    // Determine the selected cluster based on the combinations
    console.log('ageValue: ', ageValue)
    console.log('incomeValue: ', incomeValue)
    console.log('householdSizeValue: ', householdSizeValue)

    if (ageValue === '1' && incomeValue === '2' && householdSizeValue === '3') {
      setSelectedCluster('1');
    } else if (ageValue === '2' && incomeValue === '3' && householdSizeValue === '2') {
      setSelectedCluster('2');
    } else if (ageValue === '3' && incomeValue === '1' && householdSizeValue === '2') {
      setSelectedCluster('3');
    } else if (ageValue === '2' && incomeValue === '3' && householdSizeValue === '3') {
      setSelectedCluster('4');
    } else if (ageValue === '2' && incomeValue === '3' && householdSizeValue === '3') {
      setSelectedCluster('5');
    } else if (ageValue === '2' && incomeValue === '2' && householdSizeValue === '3') {
      setSelectedCluster('6');
    } else if (ageValue === '1' && incomeValue === '1' && householdSizeValue === '1') {
      setSelectedCluster('7');
    } else if (ageValue === '2' && incomeValue === '1' && householdSizeValue === '2') {
      setSelectedCluster('8');
    } else if (ageValue === '2' && incomeValue === '1' && householdSizeValue === '3') {
      setSelectedCluster('9');
    } else if (ageValue === '3' && incomeValue === '1' && householdSizeValue === '2') {
      setSelectedCluster('10');
    } else {
      // Default to cluster 11 if no valid combination is found
      setSelectedCluster('11');
    }
    console.log('selectedcluster: ', selectedCluster)

    try {
      const response = await ClusterService.getImageByCluster(selectedCluster);
      const selectedClusterData = response.data[selectedCluster-1];
      console.log('selectedClusterData: ', selectedClusterData)
      const imageField = selectedClusterData.image;
      console.log('imageField: ', imageField)
      setImageData(imageField);
      console.log('imageData: ', imageData)
      // Pass the fetched image to the parent component
      onImageReceived(imageField);
    } catch (error) {
      console.error('Error fetching cluster data:', error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-start">
      <div className="mb-3">
        <p>Age:</p>
        <ButtonGroup>
          {ageOptions.map((option, idx) => (
            <ToggleButton
              key={idx}
              id={`age-radio-${idx}`}
              type="radio"
              variant="outline-secondary"
              name="age-radio"
              value={option.value}
              checked={ageValue === option.value}
              onChange={(e) => setAgeValue(e.currentTarget.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <p>Income:</p>
        <ButtonGroup>
          {incomeOptions.map((option, idx) => (
            <ToggleButton
              key={idx}
              id={`income-radio-${idx}`}
              type="radio"
              variant="outline-warning"
              name="income-radio"
              value={option.value}
              checked={incomeValue === option.value}
              onChange={(e) => setIncomeValue(e.currentTarget.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div className="mb-3">
        <p>Household Size:</p>
        <ButtonGroup>
          {householdSizeOptions.map((option, idx) => (
            <ToggleButton
              key={idx}
              id={`household-size-radio-${idx}`}
              type="radio"
              variant="outline-success"
              name="household-size-radio"
              value={option.value}
              checked={householdSizeValue === option.value}
              onChange={(e) => setHouseholdSizeValue(e.currentTarget.value)}
            >
              {option.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <br/>
      <ButtonGroup>
        <Button onClick={handleSelection}>Submit</Button>
      </ButtonGroup>
    </div>
  );
}

export default ToggleButtonExample;
