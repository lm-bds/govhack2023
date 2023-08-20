// src/App.js

import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Navigation from './components/Navigation';
import Button from 'react-bootstrap/Button';
import ClusterSelect from './components/ClusterSelect';
import ImageContainer from './components/ImageContainer';
import './App.css';

function App() {
  const [imageData, setImageData] = useState('');

  const handleImageReceived = (image) => {
    setImageData(image);
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Row className="title-row justify-content-center mt-4">
          <h1 className="fancy-title">Australian Capital Territory</h1>
          <br/>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={4} lg={3} className="col-with-padding">
            <ClusterSelect onImageReceived={handleImageReceived} />
          </Col>
          <Col xs={12} md={8} lg={6} className="custom-image-class col-with-padding">
            {imageData && (
              <div>
                <ImageContainer
                  imageData={imageData}
                />
              </div>
            )}
          </Col>
          <Col xs={12} md={4} lg={3} className="col-with-padding">
            <Table className="custom-table" borderless>
              <thead>
                <tr>
                  <th>ACT Averages</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>36</td>
                </tr>
                <tr>
                  <td>Household Income</td>
                  <td>2,375</td>
                </tr>
                <tr>
                  <td>Household Size</td>
                  <td>2.5</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
