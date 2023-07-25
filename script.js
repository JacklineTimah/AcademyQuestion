class FormHandler {
    async validateAndSubmitForm(firstName, lastName, age, country) {
      // Validate if all fields are filled
      if (!firstName || !lastName || !age || !country) {
        throw new Error("Please fill in all the fields.");
      }
  
      // Simulate asynchronous behavior (e.g., API request, server interaction)
      await new Promise((resolve) => setTimeout(resolve, 2000));
  
      // Return a promise indicating success
      return "Form submitted successfully!";
    }
  
    createSentence(firstName, lastName, age, country) {
      const sentence = `My name is ${firstName} ${lastName}. I am from ${country}. I am ${age} years old.`;
      return sentence;
    }
  }
  
  // Example usage:
  const formHandler = new FormHandler();
  
  // Assuming you have retrieved form data and stored them in variables
  const firstName = "Jackline";
  const lastName = "Timah";
  const age = 21;
  const country = "USA";
  
  formHandler.validateAndSubmitForm(firstName, lastName, age, country)
    .then((message) => {
      console.log(message);
      const sentence = formHandler.createSentence(firstName, lastName, age, country);
      console.log(sentence);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
  