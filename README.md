# JPS2023

## Inspiration

Our inspiration for IntelliWatch: Safeguarding Learning with Computer Vision stemmed from the need to address two crucial aspects of classroom management: learning engagement and learning integrity. We recognized that a significant amount of valuable classroom time is wasted on managing phone usage, diverting educators' attention from teaching. By detecting phones and other prohibited devices, we aimed to create a system that promotes focused learning and ensures academic integrity.

## What it does

IntelliWatch utilizes Roboflow and YOLO (You Only Look Once) object detection to identify phones and other prohibited devices in the classroom environment. The system is designed to scan the classroom using strategically positioned cameras, enabling real-time detection of unauthorized device usage. When a phone or prohibited device is detected, the system triggers alerts or notifications, allowing educators to promptly address the situation and redirect students' attention back to the learning material.

## How we built it

To develop IntelliWatch, we leveraged the power of Roboflow and YOLO. We manually tagged the training data, annotated images, and drew bounding boxes around phones and prohibited devices. This annotated dataset was then used to train the YOLO model using Roboflow's platform. The trained model was integrated into our system, which utilized cameras to capture live video feeds from the classroom, feeding it into the YOLO model for object detection in real time.

## Challenges we ran into

During the development process, we encountered challenges, particularly in the manual tagging of data and drawing accurate object detection boxes. Ensuring the quality and consistency of the training dataset required meticulous attention to detail and a significant amount of time. Additionally, fine-tuning the YOLO model for optimal performance and minimizing false positives and negatives presented its challenges.

## Accomplishments that we're proud of

We take pride in successfully building IntelliWatch and implementing it in real-world classroom environments. Our system's ability to accurately detect phones and other prohibited devices, coupled with its real-time alerting mechanism, has the potential to improve classroom management and enhance teaching efficiency significantly. Through our efforts, we have developed a tool that can foster a focused learning environment, allowing educators to dedicate more time to teaching.

## What we learned

Throughout the development of IntelliWatch, we gained valuable insights into the process of training object detection models and deploying them in real-world scenarios. We learned the importance of carefully curating and annotating training data to ensure the model's accuracy. Moreover, we discovered the power of computer vision technology, such as YOLO, in addressing complex educational challenges.

## What's next for IntelliWatch: Safeguarding Learning with Computer Vision

Looking ahead, we envision expanding the capabilities of IntelliWatch by incorporating edge computing with cameras. By processing the video feeds locally on edge devices, we can reduce latency and increase the system's responsiveness. Additionally, we plan to further refine the model's performance by continuously training it on larger and more diverse datasets. Our goal is to make SafetyNet a robust and widely applicable tool for classroom hazard detection, contributing to a safer and more productive learning environment for students and educators alike.

## Links

- [Website](https://eamorebel.github.io/JPS2023/index.html)
- [Image Dataset](https://universe.roboflow.com/university-of-north-texas-towap/mobile-phone-detection-in-school-enviroments/dataset/4)
