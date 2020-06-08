# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Auction.delete_all
Bid.delete_all
User.delete_all




PASSWORD = 'supersecret'
super_user = User.create(
    first_name: 'jon',
    last_name: 'snow',
    email: 'js@winterfell.gov',
    password: PASSWORD
)

10.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
    User.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.email,
        password: PASSWORD  
    )
end
user = User.all

20.times do 
    created_at = Faker::Date.backward(days: 365 * 5)
    auction = Auction.create(
            title: Faker::Device.model_name,
            description: Faker::ChuckNorris.fact,
            reserve_price: rand(200..1000),
            ends_at: created_at,
            user: user.sample
    )
    if auction.valid? 
        rand(0..10).times do 
              Bid.create(
                 bid_price: 100,
                 auction: auction,
                 user: user.sample
             )
        end
    end

end

puts Cowsay.say("Generated #{Auction.count} Auctions", :dragon)
puts Cowsay.say("Generated #{User.count} Users", :frogs)
puts Cowsay.say("Generated #{Bid.count} Bids", :tux)