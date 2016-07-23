import React from 'react';
import Trees from 'src/Trees';
import Button from 'src/Button';
import { Link } from 'react-router';

const TreesDemo = () => (
  <div>
    <Button primary><Link to="/home">Home</Link></Button>
    <Trees animate="slow">
      <span>Directory 1</span>
      <Trees.Item expanded>
        <span>File 1</span>
         <Trees animate="slow">
          <Trees.Item expanded>
            <span>File 1</span>
          </Trees.Item>
          <Trees.Item expandable>
            <span>File 2</span>
          </Trees.Item>
          <Trees.Item expandable>
            <span>File 3</span>
          </Trees.Item>
         </Trees>
      </Trees.Item>
      <Trees.Item expandable>
        <span>File 2</span>
      </Trees.Item>
      <Trees.Item expandable>
        <span>File 3</span>
      </Trees.Item>
      <Trees.Item expandable>
        <span>File 4</span>
      </Trees.Item>
    </Trees>
  </div>
);

export default TreesDemo;
