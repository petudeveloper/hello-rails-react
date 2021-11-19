# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Greeting.destroy_all

Greeting.create!([{
  body: "Hello. My name is petudeveloper. What is your name"
},
{
  body: "Hello. How are you?"
},
{
  body: "Hello and welcome!"
},
{
  body: "Hi buddy. How can I help you?"
},
{
  body: "Hi, nice to meet you!"
}])

p "Creadas #{Greeting.count} películas"