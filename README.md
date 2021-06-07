# News of Today

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Functionality](#functionality)
  - [Landing Page](#landing-page)
  - [Detailed Article View](#detailed-article-view)
  - [Accessibility](#accessibility)
  - [Error Handling](#error-handling)

## About the Project

News of Today is a 6 hour take home challenge. Using the New York Times API a user is able to see top stories of the day, travel to a detailed page, sort by category and have the option to redirect to the full article on NYT.com. This project utilizes, JavaScript, React and React Router DOM. The entire app is fully accessible by keyboard.

## Installation

1. Fork this repository.
2. Clone it down to your local machine with `git clone <your SSH Key>`.
3. Navigate into this directory with `cd news-of-today`.
4. Create an evironment file with `touch .env`.
  * Travel to the [NYT API Website](https://developer.nytimes.com/docs/top-stories-product/1/overview) register an api key for `Top Stories`.
  * In the `.env` file create a key/value `REACT_APP_KEY= your api key`.
6. Run `npm install` to compile the React application.
7. Run `npm start` to see the app running locally.
8. Run `<your text editor> .` to see the code in your text editor.

## Functionality

- [Landing Page](#landing-page)
- [Detailed Article View](#detailed-article-view)
- [Sort Articles](#sort-articles)
- [Mobile Design](#mobile-design)
- [Accessibility](#accessibility)
- [Error Handling](#error-handling)

#### Landing Page

- When a user visits the site they are able to view the top articles of the day posted by the New York times. Each article is a clickable link. Clicking on a link will redirect the user to a detailed view of the article.

![Screen Shot 2021-06-06 at 7 24 13 PM](https://user-images.githubusercontent.com/72312636/120947528-123dd600-c6fd-11eb-8f5f-83c515c480b4.png)

#### Detailed Article View

- After a user clicks on an article they are redirected to the detailed view page. Here a user can view an article abstract and click on a button to be redirected to the full article on an external website.

![Screen Shot 2021-06-06 at 7 24 35 PM](https://user-images.githubusercontent.com/72312636/120947534-1538c680-c6fd-11eb-9dc2-c9e008c1133c.png)

#### Sort Articles

- Users can sort articles by clicking on the menu button and selecting a category. Once a category is selected, the user is redirected to sorted articles

![Screen Shot 2021-06-06 at 7 24 55 PM](https://user-images.githubusercontent.com/72312636/120947542-18cc4d80-c6fd-11eb-9dcd-2ce75a328be9.png)

#### Mobile Design

- This app is completely responsive and can be used on all screen sizes. 

![Screen Shot 2021-06-06 at 7 25 25 PM](https://user-images.githubusercontent.com/72312636/120947547-1bc73e00-c6fd-11eb-9eba-26f5997ad98d.png)

#### Accessibility

- I made accessiblity a priority when building this app. Users can tab through the entire app to view articles and use 'enter' to control their experience.

#### Error Handling

- If a user travels to an incorrect path or an api returns a bad request the user is redirected to an error page.

![Screen Shot 2021-06-06 at 7 40 34 PM](https://user-images.githubusercontent.com/72312636/120948275-1965e380-c6ff-11eb-809d-9bb3950c203d.png)
