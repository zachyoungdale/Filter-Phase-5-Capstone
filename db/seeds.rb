# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
City.destroy_all
CoffeeShop.destroy_all

puts "seeding admin user"

User.create(name: "Zachary Youngdale", username: "zachyoungdale", password: "doogie13", password_confirmation: "doogie13", admin: true)




puts "Seeding cities..."

stx = City.create(name: "San Antonio, TX")
atx = City.create(name: "Austin, TX")
dtx = City.create(name: "Dallas, TX")
htx = City.create(name: "Houston, TX")
la = City.create(name: "Los Angeles, CA")
ny = City.create(name: "New York, NY")
nash = City.create(name: "Nashville, TN")
sf = City.create(name: "San Francisco, CA")
lyh = City.create(name: "Lynchburg, VA")
chi = City.create(name: "Chicago, IL")

puts "Seeding Coffee Shops..."

merit1 = CoffeeShop.create(name: "Merit Coffee", address: "700 E Sonterra Blvd, San Antonio, TX 78258", city_id: stx.id, website: "https://www.meritcoffee.com", socials: "https://www.instagram.com/meritcoffee/?hl=en")
indy = CoffeeShop.create(name: "Indy Coffee Club", address: "7114 UTSA Boulevard, San Antonio, TX 78249", city_id: stx.id, website: "https://www.indycoffeeco.com", socials: "https://www.instagram.com/indycoffeeclub/?hl=en")
estate = CoffeeShop.create(name: "Estate Coffee Company", address: "1320 E Houston St, San Antonio, TX 78205", city_id: stx.id, website: "https://www.estatecoffeecompany.com", socials: "https://www.instagram.com/estatecoffeeco/")
merit2 = CoffeeShop.create(name: "Merit Coffee", address: "4615 N Lamar Blvd, Austin, TX 78751", city_id: atx.id, website: "https://www.meritcoffee.com", socials: "https://www.instagram.com/meritcoffee/?hl=en")
houndstooth = CoffeeShop.create(name: "Houndstooth Coffee", address: "4200 N Lamar Blvd, Austin, TX 78756", city_id: atx.id, website: "https://www.houndstoothcoffee.com", socials: "https://www.instagram.com/houndstoothcoffee/")
cultivar = CoffeeShop.create(name: "Cultivar Coffee Bar", address: "1155 Peavy Rd, Dallas, TX 75218", city_id: dtx.id, website: "https://www.cultivarcoffee.com/", socials: "https://www.instagram.com/cultivarcoffee/")
lemma = CoffeeShop.create(name: "Lemma Coffee Roasters", address: "1014 S Broadway St, Carrollton, TX 75006", city_id: dtx.id, website: "https://www.lemmacoffeeco.com/", socials: "https://www.instagram.com/lemmacoffeeco/")
dayglow = CoffeeShop.create(name: "Dayglow", address: "3206 Sunset Blvd, Los Angeles, CA 90026", city_id: la.id, website: "https://dayglow.coffee/", socials: "https://www.instagram.com/Dayglowcoffee/")
found = CoffeeShop.create(name: "Found Coffee", address: "1355 Colorado Blvd, Los Angeles, CA 90041", city_id: la.id, website: "http://www.foundcoffeela.com/", socials: "https://www.instagram.com/foundcoffeela/")
sey = CoffeeShop.create(name: "Sey Coffee", address: "18 Grattan St, Brooklyn, NY 11206", city_id: ny.id, website: "https://www.seycoffee.com/", socials: "https://www.instagram.com/seycoffee/")
la_cabra = CoffeeShop.create(name: "La Cabra", address: "152 2nd Ave, New York, NY 10003", city_id: ny.id, website: "https://www.lacabra.dk/", socials: "https://www.instagram.com/lacabracoffee/")
sump = CoffeeShop.create(name: "Sump Coffee", address: "8 City Blvd, Nashville, TN 37209", city_id: nash.id, website: "https://www.sumpcoffee.com/", socials: "https://www.instagram.com/sumpcoffee/")
barista_parlor = CoffeeShop.create(name: "Barista Parlor", address: "519 Gallatin Ave, Nashville, TN 37206", city_id: nash.id, website: "https://baristaparlor.com/", socials: "https://www.instagram.com/baristaparlor/?hl=en")
saint_frank = CoffeeShop.create(name: "Saint Frank Coffee", address: "2340 Polk St, San Francisco, CA 94109", city_id: sf.id, website: "https://www.saintfrankcoffee.com/", socials: "https://www.instagram.com/saintfrankcoffee/")
sightglass = CoffeeShop.create(name: "Sightglass Coffee", address: "3014 20th St, San Francisco, CA 94110", city_id: sf.id, website: "https://sightglasscoffee.com/", socials: "https://www.instagram.com/sightglass/")
golf_park = CoffeeShop.create(name: "Golf Park Coffee Co.", address: "2306 Bedford Ave, Lynchburg, VA 24503", city_id: lyh.id, website: "https://www.golfparkcoffee.com/", socials: "https://www.instagram.com/golfparkcoffee/")
third_wave = CoffeeShop.create(name: "Third Wave Coffee", address: "16955 Forest Rd, Forest, VA 24551", city_id: lyh.id, website: "https://third-wave.coffee/", socials: "https://www.instagram.com/third_wave_coffee/?hl=en")
flw = CoffeeShop.create(name: "Four Letter Word Coffee", address: "3022 W Diversey Ave, Chicago, IL 60647", city_id: chi.id, website: "https://www.4lwcoffee.com/", socials: "https://www.instagram.com/4lwcoffee/")
intelligentsia = CoffeeShop.create(name: "Intelligentsia Coffee", address: "3123 N Broadway, Chicago, IL 60657", city_id: chi.id, website: "https://www.intelligentsia.com/", socials: "https://www.instagram.com/intelligentsiacoffee/")

puts "Done Seeding!"




