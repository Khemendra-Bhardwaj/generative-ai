const rest = async () => {
    const classifier = ml5.imageClassifier('MobileNet', modelLoaded);
  
    // When the model is loaded
       async function modelLoaded() {
        console.log('Model Loaded!');
        await fun();
        fun2();
      }

    const allResult = [];
    
      const fun = async () => {
        const results = await classifier.classify(document.getElementById('image'));
        if (results) {
          console.log('Success');
          for (let i = 0; i < results.length; i++) {
            console.log(i);
            allResult.push(results[i]);
          }
          console.log('done1 ');
        }
      };
   
     
    
  
    const fun2 = () => {
      const ulElement = document.querySelector('.result');
      while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }
  
      for (let i = 0; i < allResult.length; i++) {
        const result_temp = document.createElement('li');
        result_temp.innerHTML = "MayBe: " + allResult[i].label + " confidence: " + allResult[i].confidence;
        ulElement.appendChild(result_temp);
      }
      console.log('done 2 ');
    };
  };
  

  const main = async () => {
    // alert('May take some time .. ')
    console.log('Clicked ');
    const url = document.getElementsByTagName('input')[0].value;
    const img = document.querySelector("#image");
    
    // Handle the DOMException here

      img.src = url;
   
   
  
  
    console.log(url);
  
    // Call the rest() function inside a try-catch block

      await rest();
  
    
    
  };
  
  main(); // will trigger onclick on the button
  