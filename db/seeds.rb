u = User.create(
  email: "test@test.com", 
  password: "password", 
  password_confirmation: "password"
)

20.times do 
  Account.create(
    name: Faker::Artist.name,
    gender: Faker::Gender.binary_type,
    age: rand(18..99),
    location: Faker::Address.city,
    avatar: Faker::Avatar.image("my-own-slug", "50x50"),
    user_id: 1
  )
end

puts "Test user - test@test.com - password with 20 accounts"