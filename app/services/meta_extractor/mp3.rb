require "mp3info"

module MetaExtractor
  class Mp3
    def initialize(file)
      @mp3 = Mp3Info.open(file)
    end

    def size
      @mp3.audio_content[1]
    end

    def duration
      @mp3.length.to_i
    end
  end
end
