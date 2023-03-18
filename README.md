### 2nd Place Overall at PantherHacks 2022

### Second Wind

## 🤔 Inspiration 

Personally speaking, we have a friend with diabetes. He recently showed us his insulin pump, which he hacked in order to regulate his blood sugar levels more accurately. This "hack" allowed him to save thousands of dollars on features that pharmaceutical monopolies should be implementing for reasonable sums. 

Inspired by our friend, we looked to other lifesaving devices that are currently being monopolized by the hands of a few. Looking within our group, one of our members, Emmanuel, has a grandmother who is eighty years old. Due to various family commitments, she spends a few hours alone each day, putting her at risk of a fatal accident like a fall. After researching current commercial solutions for fall detection, devices can range from anywhere from twenty-four to fifty dollars **per device** monthly. While this is affordable for his family, **it is distinctly out of reach for many disadvantaged peoples**.

After more research, we discovered that an older adult falls every thirteen seconds as well as how falls cost the world over fifty billion dollars. Seeing this, we ultimately decided to create an open-source solution for detecting falls in an attempt to pressure pharmaceutical companies to lower prices on these lifesaving devices. 


## 📷 What it does 


Our project uses a machine learning model made in TensorFlow to detect if an elderly person has fallen or not. When a user navigates to our website, opens the dedicated Andriod application, or runs the raspberry pi application, the machine learning model will begin the image detection process. If a fall is detected, a message will be sent to first responders via Twilio, ensuring that the fallen person can get the help that they need.


## 👷 How we built it 


The crux of our project is the Machine Learning model, as the app, website, and raspberry pi solution depend upon it to make the actual decisions that are then displayed. Fundamentally speaking, the image detection model for the website was built with tensorflow.js, and the image detection model for the Andriod App and Raspberry Pi solutions was built with a quantized TensorFlow lite model. 

Using TensorFlow allowed us to primarily focus on gathering proper samples for the model, rather than focusing on optimizing the model. The samples were gathered by capturing over 30 videos of people falling in various rooms, then breaking the videos per frame, labeling each frame as falling or not falling, and then finally augmenting the samples to increase the total accuracy of the model.

For training, we used around 5 epochs, a training rate of 0.01, and a batch size of 16. Other than that, every other parameter was from the default TensorFlow-model-maker package.

At the end of the day, the technologies implemented in the website were React, react-router-Dom, TailwindCSS, Twilio, Tensorflow, and ML5. We chose to use the create-react-app boilerplate to minimize initial setup and invest more time in fixing bugs and implementing Twilio. As for an explanation of how the website works, the website gets the model, metadata, and weighting files from the tensorflow.js model, asks for a webcam input from the user, and then pushes that webcam input into the TensorFlow files, gaining a result back which is then displayed to the user.

The Andriod App and Raspberry Pi solution were very simple to create. We simply trained the tensorflow lite model and downloaded Google's sample applications for both. For Andriod app, we needed to install Andriod Studio and replace the default model with the one we trained. As for the raspberry pi solution, we simply needed to place the model we trained into the assets folder of the application.


## 🌶️ Challenges we ran into


We ran into more than a few major challenges during the creation of the machine learning model. While most of us had prior experience with TensorFlow, we mostly made models to detect what static images were. This time around, it was much more difficult to create the model considering the complexity with detecting movement. We managed to alleviate this issue by gathering more samples by recording from a variety of different directions, allowing for the model to being accurate when given images from any angle or orientation. 

Specifically speaking for the website, one of the main challenges we ran into was the actual image classification and the video rendering. This lead us to spend a few hours on html videos, less common react depedency components, and overall Tensorflow-React collaboration.


## 🎖️ Accomplishments that we're proud of


First and foremost, we are proud of actually completing the project.

Second, we are proud of how accurate our model is. Making the Machine Learning model specifically to detect movement in static images was no small undertaking, particularly because we needed to differentiate between intentional movements like walking to unintentional movements like falling. 

Third, we are proud of being able to implement Twilio into our website to contact first responders, as we feel that it allows for our project to actually be usable in the real world.

Finally, we are proud of the various implementations we made into android and raspbian. With these implementations, we hoped to make our model more accessible to impoverished communities and are proud we managed to pull it off.


## 🧠 What we learned


First, we learned a lot about the social impacts of Falls, notably the cost for both the elderly and the taxpayer.
From a computer science skill viewpoint, we learned how to use various tools to create a functional website, notably Twilio, react, tailwind, ml5, and a few other tools. We also learned how to use android studio and how to make TensorFlow lite models. 


## 🔜 What's next for Second Wind – Saving the Lives of the Elderly


We want to develop Second Wind so that it could detect falls at a level better than that of other commercial solutions. We understand that there are various shortcomings with our approach so we have laid out the following goals for the future.

Goals for the future:
  
1. We want to create a machine learning model to detect fall audio, as audio can help make our results more accurate. Audio also would allow our project to be active in more locations in a household, and cover for the blind spots cameras typically have.

2. We want to gather more sample videos so that our model will work properly no matter what environment the project is placed in. For example, we want to gather samples that span various locations, genders, races, etc.

3. We want to have Twilio actually contact first responders. Currently, as we are testing the device, we have messages sent to a teammate's phone. However, in a practical use case, we would need to connect Twilio to a team that can differentiate between false flags and real accidents and then send the necessary information to dispatchers within the area.

4. We want to enable a "clip" feature for responders. Essentially, whenever a fall is detected we would like the device to record a quick video of the fall and then send that alongside the message to first responders.



## Project Status
Complete


## Installation and Setup Instructions


#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install` in both the main folder and the server folder

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

To Send Twilio Messages:

Contact one of our team members for the .env file information

