const validateInput = input => {
  let messages = [];
  let _id = 0;

  if (input === '' || input == null) {
    messages.push({id:_id++,message:'city is required'});
  }

  if (!/^[A-Za-z\s]*$/.test(input)) {
    messages.push({id:_id++,message:'only letters are allowed'});
  }
  if (input.length > 20) {
    messages.push({id:_id++,message:'input is too long'});
  }

  return messages;
};

export default validateInput;
