class Api::V1::MessagesController < ApplicationController
  def show
    randomIndex = rand(1..5)
    @greeting = Greeting.find(randomIndex)
    render json: @greeting
  end
end
