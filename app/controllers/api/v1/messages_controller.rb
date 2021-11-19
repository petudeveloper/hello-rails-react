class Api::V1::MessagesController < ApplicationController
  def show
    @greeting = Greeting.order('RANDOM()').first
    render json: @greeting
  end
end
