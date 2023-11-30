# frozen_string_literal: true

class SongComponent < ViewComponent::Base
  attr_reader :song

  def initialize(song:)
    @song = song
  end

end
