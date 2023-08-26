# Seeed's React Technical Interview

This technical interview involves building a web application that displays information about characters from the Rick and Morty Universe. The application has a prototype containing the required design, and there is a getCharacters function that accepts a search parameter to filter characters. In addition, there is a Favorites Context Provider that stores the user's favorite characters.

The following tasks need to be completed:

- Implement a search feature that allows users to search for characters by name. This will require using the getCharacters function to retrieve data from a backend API, passing a search parameter based on the user's input, and then rendering the filtered data on the page.

- Use the getCharacters function to retrieve the initial data to be displayed on the web page as the initial rendering data.

- Wrap the application in the FavoritesProvider.

- Use the FavoritesProvider to display the user's favorite characters on the page.

- Implement the ability for users to add and remove characters from their list of favorites using the Favorites context. You will need to create a reducer action that adds or removes characters and returns the new state.

- Style the various lists and containers on the page to create an attractive and user-friendly interface. Use the provided prototype as a reference and add your own styles as needed.

All the code you need to complete is marked with TODO comments. You can find the code in the src directory.

### Evaluation Criteria

- The application should be built using React and Typescript(Optional). If you are not familiar with Typescript, you can use Javascript instead, just make sure to use the correct file extensions (.js and .jsx).

- You should use https://heroicons.com/ for icons

- The application should be styled using CSS or CSS Modules.

- Use of the best React, Input handling and JavaScript practices.

- You should use the provided getCharacters function and FavoritesProvider to retrieve and store data.

- Use of the provided prototype as a reference for the design.

- Use of external libraries is not encouraged, but if you do use them you'll be expected to explain why you chose to use them.

Good luck with your technical interview!
