require 'capybara/cucumber'
require 'capybara/poltergeist'
require 'yaml'
require 'active_support/time'
require 'andand'
require 'rspec'
require 'selenium/webdriver'
require 'parallel'

# Load matcher files under 'support/matcher' folder
Dir[File.expand_path('../matcher/*.rb', __FILE__)].each {|f| require f}

# load user preferences
if File.exists?("#{ENV['HOME']}/.cucumberrc.rb")
  require "#{ENV['HOME']}/.cucumberrc"
end

# allow command line to override defaults
$phantomjs_path = ENV['phantomjs_path'] || $phantomjs_path
$base_url = ENV['base_url'] || $base_url
$environment = ENV['env'] || $environment
$proxy_bypass = ENV['proxy_bypass'] || true
$server_count = ENV['server_count'] || 2
$verbose_logging = ENV['logging'] || false

# Capybara setup
ENV['no_proxy'] = "127.0.0.1"
url = "http://#{ENV['bsusername']}:#{ENV['bskey']}@hub.browserstack.com/wd/hub"
Capybara.register_driver :browserstack do |app|
    capabilities = Selenium::WebDriver::Remote::Capabilities.new

    if ENV['BS_AUTOMATE_OS']
        capabilities['os'] = ENV['BS_AUTOMATE_OS']
        capabilities['os_version'] = ENV['BS_AUTOMATE_OS_VERSION']
    else
        capabilities['platform'] = ENV['SELENIUM_PLATFORM'] || 'ANY'
    end

    if ENV['SELENIUM_DEVICE']
        capabilities['browserName'] = ENV['SELENIUM_DEVICE']
        capabilities['device'] = ENV['SELENIUM_DEVICE_ID']
        else
            capabilities['browser'] = ENV['SELENIUM_BROWSER'] || 'chrome'
            capabilities['browser_version'] = ENV['SELENIUM_VERSION'] if ENV['SELENIUM_VERSION']
    end

    capabilities['acceptSslCerts'] = 'true'
    capabilities['browserstack.debug'] = 'true'
    capabilities['project'] = ENV['BS_AUTOMATE_PROJECT'] if ENV['BS_AUTOMATE_PROJECT']
    capabilities['build'] = ENV['BS_AUTOMATE_BUILD'] if ENV['BS_AUTOMATE_BUILD']

    case ENV['SELENIUM_BROWSER']
        when 'ie'
            capabilities['browserstack.ie.driver'] = "2.45"
    end
    capabilities['resolution'] = '1600x1200'
    Capybara::Selenium::Driver.new(app,
                                   :browser => :remote, :url => url,
                                   :desired_capabilities => capabilities)
end

Capybara.register_driver(:chrome) { |app| Capybara::Selenium::Driver.new(app, :browser => :chrome) }
Capybara.register_driver(:poltergeist) { |app| Capybara::Poltergeist::Driver.new(app, :phantomjs => $phantomjs_path, :js_errors => false,:phantomjs_logger => File.open("artifacts/phantomjs.log", "a")) }
Capybara.run_server = false
Capybara.default_driver = :poltergeist
if ENV['crossbrowser'] == 'true'
    Capybara.javascript_driver = :browserstack
else
    Capybara.javascript_driver = :chrome

end
Capybara.default_wait_time = 10
Capybara.default_selector = :css


# check the project and environments are specified
if $project.nil?
  puts "Please provide a project to run against (e.g./ project=ausgeo)"
  exit
elsif ($environment == 'local') && (!$base_url)
  puts "You are running in local environment, please specify the base_url of the server under test (in ~/.cucumberrc.rb OR as command line option)"
  exit
end


# populate the base URL if an environment is specified
if $environment != 'local'
  environments = YAML::load_file(File.join(File.dirname(File.expand_path(__FILE__)), '../' + $project + '/config/environments.yml'))

  abort("The environment '#{$environment}' is not setup in config/environments.yml") unless environments[$environment]

  $base_url ||= environments[$environment]['web']
end


puts "--| Envrionment settings |--"
puts "$project                     = #{$project}"
puts "$environment                 = #{$environment}"
puts "$base_url                    = #{$base_url}"
puts "$phantomjs_path              = #{$phantomjs_path}"
puts "$proxy_bypass                = #{$proxy_bypass}"
puts "$server_count                = #{$server_count}"
puts "$login_radius_stub_port      = #{$login_radius_stub_port}"
puts "$my_recipes_stub_port        = #{$my_recipes_stub_port}"

# so visit url's can be in the format /path/to/item
Capybara.app_host = (($base_url.end_with? "/") ? ($base_url[0..-2]) : ($base_url))

require '../support/util'
# include all the common steps (it's '..' because the path is relative to where we are running from, not where this file is)
Dir.glob('../common/step_definitions/*', &method(:require))
Dir.glob('../common/support/*', &method(:require))

if $project == 'aww' || $project == 'wd'
  Dir.glob('../common_aww_wd/step_definitions/*', &method(:require))
  Dir.glob('../common_aww_wd/support/*', &method(:require))
end
