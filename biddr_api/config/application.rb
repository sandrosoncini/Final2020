require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module BiddrApi
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    # Don't generate system test files.
    config.generators.system_tests = nil

    config.middleware.insert_before 0, Rack::Cors do
      allow do
         # origin  accepts an array os domain names. Thes are all the whitelistred DOMAIS that
        origins 'localhost:5500', '127.0.0.1:5500', 'localhost:8080'
        resource(
          "/api/*", # only allow CORS to paths thata look like /api
          
          headers: :any, #allow requests to contain any headers
          credentials: true,
          methods: [:get, :post, :delete, :patch, :put, :options]
        )
      end
    end
  end
end
