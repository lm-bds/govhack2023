import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import '../App.css';

function ImageContainer({ imageData, selectedCluster }) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const clusterData = [
    {
      postcode: 2606,
      suburb: 'Chifley',
      council: 'WODEN VALLEY COMMUNITY COUNCIL',
      contact: 'wodenvalleycommunitycouncil@gmail.com',
      age: 34,
      income: '$2,684',
      householdSize: 2.2,
    },
    {
      postcode: 2903,
      suburb: 'Oxley',
      council: 'TUGGERANONG COMMUNITY COUNCIL',
      contact: 'info@tuggeranong.org.au',
      age: 39,
      income: '$2,710',
      householdSize: 2.6,
    },
    {
      postcode: 2906,
      suburb: 'Gordon',
      council: 'GUNGAHLIN COMMUNITY COUNCIL',
      contact: 'www.accesscanberra.act.gov.au',
      age: 37,
      income: '$2,785',
      householdSize: 2.7,
    },
  ];

  return (
    <div>
      <Image
        src={imageData}
        alt="Cluster Image"
        onClick={handleImageClick}
        fluid
        style={{ cursor: 'pointer' }}
      />

      <Modal show={showModal} onHide={handleCloseModal} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title>Extra Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3>Council Areas to Target</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Postcode</th>
                  <th>Suburb</th>
                  <th>Age</th>
                  <th>Income</th>
                  <th>Household Size</th>
                  <th>Council</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {clusterData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.postcode}</td>
                    <td>{data.suburb}</td>
                    <td style={{ color: 'blue', fontWeight: 'bold', textAlign: 'center' }}>{data.age}</td>
                    <td style={{ color: 'darkorange', fontWeight: 'bold', textAlign: 'center' }}>{data.income}</td>
                    <td style={{ color: 'green', fontWeight: 'bold', textAlign: 'center' }}>{data.householdSize}</td>
                    <td>{data.council}</td>
                    <td>{data.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ImageContainer;
