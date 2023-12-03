class SongsController < ApplicationController
  def index
    if params[:song_title] && params[:commit] == 'search'
      @songs = Song.where("title LIKE ?", "%#{params[:song_title]}%")
    else
      @songs = Song.all
    end
  end
end
