// Utility function to display results in the DOM
const displayOutput = (message) => {
    const outputDiv = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
  };
  
  // 1. ES6+ Features and Arrow Functions
  const user = {
    name: 'Ahmed',
    age: 23,
    hobbies: ['flying', 'gaming'],
  };
  
  // Destructuring the user object
  const { name, age, hobbies } = user;
  const [firstHobby, secondHobby] = hobbies;
  
  // Arrow function to create a user summary
  const getUserSummary = (userName, userAge) => `User: ${userName}, Age: ${userAge}`;
  displayOutput(getUserSummary(name, age));
  displayOutput(`Hobbies: ${firstHobby}, ${secondHobby}`);
  
  // 2. Promises: Simulate fetching user data
  const fetchUserData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, username: 'ahmed_dev', email: 'ahmed@test.com' };
        resolve(data);
      }, 1000);
    });
  };
  
  // 3. Async/Await: Fetch and display user data
  const loadUserData = async () => {
    try {
      displayOutput('Fetching user data...');
      const data = await fetchUserData();
      displayOutput(`Fetched User: ${data.username}, Email: ${data.email}`);
    } catch (error) {
      displayOutput('Error fetching user data');
    }
  };
  loadUserData();
  
  // 4. React-like Pattern: Simulate state management
  let appState = {
    count: 0,
  };
  
  // Function to update state and re-render
  const updateState = (newCount) => {
    appState.count = newCount;
    render();
  };
  
  // Simulate rendering like React
  const render = () => {
    const countDisplay = `Current Count: ${appState.count}`;
    displayOutput(countDisplay);
  };
  
  // Simulate a button click to update state
  const simulateClick = () => {
    updateState(appState.count + 1);
  };
  
  // Initial render
  render();
  
  // Simulate clicks after a delay
  setTimeout(simulateClick, 2000);
  setTimeout(simulateClick, 3000);