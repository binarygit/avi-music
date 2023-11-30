# frozen_string_literal: true

require "test_helper"

class SongComponentTest < ViewComponent::TestCase
  def test_song_component
    @songs = Song.all
    render_inline(SongComponent.with_collection(@songs))

    @songs.each do |song|
      selector = "a[data-href='songs/#{song.title}'][data-id='#{song.id}'][data-action='click->music#play']"
      assert_selector selector
      assert_selector "a[href='##{song.title}']"
    end
  end
end
