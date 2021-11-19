class Api::V1::MessagesController < ApplicationController
  def show
    random_index = rand(1..5)
    @greeting = Greeting.find(random_index)
    render json: @greeting
  end
end
