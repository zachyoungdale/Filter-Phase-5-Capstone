# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_23_162224) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookmarks", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "coffee_shop_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_shop_id"], name: "index_bookmarks_on_coffee_shop_id"
    t.index ["user_id"], name: "index_bookmarks_on_user_id"
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "coffee_shops", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.integer "city_id"
    t.string "website"
    t.string "socials"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "coffee_shop_id", null: false
    t.integer "rating"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_shop_id"], name: "index_reviews_on_coffee_shop_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "bookmarks", "coffee_shops"
  add_foreign_key "bookmarks", "users"
  add_foreign_key "reviews", "coffee_shops"
  add_foreign_key "reviews", "users"
end
