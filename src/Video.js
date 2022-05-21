import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Chart from './Chart';
import useInterval from '@use-it/interval';


let classifier;

function Video() {
    const videoRef = useRef();
    const [result, setResult] = useState([]);
    
    useEffect(() => {
      classifier = ml5.imageClassifier("./tm-my-image-model/model.json", () => {
        navigator.mediaDevices
          .getUserMedia({ video: true, audio: false })
          .then((stream) => {
            videoRef.current.srcObject = stream;
            videoRef.current.play(); 
            
          });
      });
    }, []);

    useInterval(() => {
        if (classifier) {
          classifier.classify(videoRef.current, (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            setResult(results);
          });
        }
      }, 500);


  
    return (
      <div class="container mx-auto flex items-center justify-center">
        <video class="mr-20"
          ref={videoRef}
          style={{transform: "scale(-1, 1)"}}
          width="300"
          height="150"
        />
        <div>
        {result.length > 0 && (
            <div>
                <Chart data={result[0]} />
            </div>
        )}
        </div>
      </div>
      
    );
  }
  
  export default Video;