# Romance-system
A website for easy learning about the Romance system

## Instructions for how to make a new character page:
> Replace {{CharacterName}} with the name of the character. Replace {{CharacterImageURL}} with the image URL for that character (e.g., https://example.com/character.png). Replace {{CharacterIntro}}, {{CharacterBiography}}, and {{CharacterPersonality}} with the respective text for the character. Replace {{Ability1}}, {{Ability2}}, etc., with the specific abilities for that character.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{CharacterName}} - Character Profile</title>
  <link rel="stylesheet" href="style.css"> <!-- Link to your main stylesheet -->
</head>
<body class="oc-page">
  <header>
    <h1>{{CharacterName}} - Character Profile</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li> <!-- Link back to home page -->
        <li><a href="/oc-list.html">Character List</a></li> <!-- Link to list of OCs -->
      </ul>
    </nav>
  </header>

  <main>
    <section id="oc-profile">
      <h2>{{CharacterName}}</h2>
      <img src="{{CharacterImageURL}}" alt="{{CharacterName}} Character Image" /> <!-- Replace with character's image URL -->
      <p>{{CharacterIntro}}</p> <!-- Brief intro about the character -->

      <h3>Biography</h3>
      <p>{{CharacterBiography}}</p> <!-- Detailed biography of the character -->

      <h3>Personality</h3>
      <p>{{CharacterPersonality}}</p> <!-- Character's personality traits -->

      <h3>Abilities</h3>
      <ul>
        <li>{{Ability1}}</li> <!-- Character's abilities -->
        <li>{{Ability2}}</li>
        <!-- Add more abilities as needed -->
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 Your Universe | All Rights Reserved</p>
  </footer>

  <script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>
