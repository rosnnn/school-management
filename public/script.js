const apiUrl = '/api'; // Base API URL

// Handle Add School Form Submission
document.getElementById('addSchoolForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;

  const response = await fetch(`${apiUrl}/addSchool`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, address, latitude, longitude }),
  });

  const result = await response.json();
  alert(result.message);
  e.target.reset();
});

// Handle Search Schools Form Submission
document.getElementById('searchSchoolsForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the latitude and longitude values entered by the user
    const userLat = document.getElementById('userLat').value;
    const userLon = document.getElementById('userLon').value;

    console.log('Latitude:', userLat, 'Longitude:', userLon); // Debug log for input values

    try {
        // Fetch nearby schools from the backend
        const response = await fetch(`/api/listSchools?lat=${userLat}&lon=${userLon}`);
        const schools = await response.json();

        console.log('Schools Received:', schools); // Debug log for response

        // Update the UI with the list of nearby schools
        const schoolList = document.getElementById('schoolList');
        schoolList.innerHTML = ''; // Clear existing list

        schools.forEach(school => {
            const li = document.createElement('li');
            li.textContent = `${school.name} (${school.distance.toFixed(2)} km away)`;
            schoolList.appendChild(li);
            console.log(`Added School to UI: ${school.name}`); // Debug log for each school added to the list
        });
    } catch (error) {
        console.error('Error fetching schools:', error); // Log any fetch errors
    }
});


