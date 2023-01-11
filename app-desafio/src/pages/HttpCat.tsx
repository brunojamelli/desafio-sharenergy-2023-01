import React, { useState, useEffect } from "react";
import axios from "axios";

interface HttpCatImage {
    file: string;
}


const HttpCat: React.FC = () => {
    const [statusCode, setStatusCode] = useState<string>('');
    const [httpCatImage, setHttpCatImage] = useState<HttpCatImage | null>(null);
  
    useEffect(() => {
      const fetchImage = async () => {
        const response = await fetch(`https://http.cat/${statusCode}`);
        if (!response.ok) {
          // error handling
          throw new Error('Failed to load image');
        }
        const image = await response.json();
        setHttpCatImage(image);
      };
      if (statusCode) {
        fetchImage();
      }
    }, [statusCode]);
  
    return (
      <div>
        <h1>HTTP Cat Image Finder</h1>
        <div>
          <label htmlFor="status-code">Status Code:</label>
          <input
            type="number"
            name="status-code"
            value={statusCode}
            onChange={(event) => setStatusCode(event.target.value)}
          />
        </div>
        {httpCatImage && (
          <div>
            <h2>Image:</h2>
            <img src={httpCatImage.file} alt="HTTP Cat Image" />
          </div>
        )}
      </div>
    );
  };

export default HttpCat;