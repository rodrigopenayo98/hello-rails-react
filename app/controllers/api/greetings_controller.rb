class Api::GreetingsController < ApplicationController
  def random
    random_greeting = Message.order('RANDOM()').first
    render html: "<p class=\"rdm-msj\">#{random_greeting.content}</p>".html_safe
  end
end
