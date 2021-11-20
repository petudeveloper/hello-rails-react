# Hello Rails React

This is a web API that works with React and Redux. The database stores greetings. Doing an API request returns a random element from the table. React is set up to do an API request and display the resulting greeting.

## Prerequisites
- Ruby on Rails. Official Rails Guides [here](https://guides.rubyonrails.org/).
- Postgres. Official documentation [here](https://www.postgresql.org/download/).

## Getting Started
To get a local copy up and running follow these simple example steps.

- Run on your terminal `git clone https://github.com/petudeveloper/hello-rails-react.git`
- Run on your terminal `cd hello-rails-react`

## Setup
Run the following commands on your terminal
- `bundle install`
- `yarn install`
- `rails webpack:install`
- `npm install`

Setup database with:
- `rails db:migrate`

Seed database with 5 greetings:
- `rails db:seed`

## Usage
Start server with:
- `rails server` or `rails s`

- Got to your browser and visit: `http://localhost:3000/`

- To see the API working visit: `http://localhost:3000/api/v1/greetings`

## Build With

- Ruby on Rails
- React
- Redux
- Postgres

# Author

👤 **David Alvarez**

- GitHub: [@petudeveloper](https://github.com/petudeveloper)
- Twitter: [@petudeveloper](https://twitter.com/petudeveloper)
- LinkedIn: [David Alvarez Mazzo](https://www.linkedin.com/in/davidalvarezmazzo/)

# 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/petudeveloper/space-travelers/issues).

# Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Hat tip to anyone who's code was used
- Inspiration
- etc

## 📝 License

This project is [MIT](./MIT.md) licensed.
